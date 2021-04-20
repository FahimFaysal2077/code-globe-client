import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './CustomerReview.css';
import TransactionSideBar from '../TransactionSideBar/TransactionSideBar';

const CustomerReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = (data, e) => {
        const bookData = {
            name: data.name,
            quote: data.quote,
            address: data.address,
            image: imageURL
        };
        const url = `http://localhost:5000/addReview`
        console.log(bookData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-types': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => {
                console.log('server side response', res)
                e.target.reset()
            })
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '0069b2d641d6702c507985600c84134f');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <section className="container-fluid row">
            <TransactionSideBar></TransactionSideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Courses</h5>
                <form className="row g-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="name">Your Name</label>
                        <br />
                        <input name="name" placeholder="Enter your Name" ref={register} type="text" ClassName="form-control" id="name" required />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="quote">Quote</label>
                        <br />
                        <input name="quote" placeholder="Enter Quote" ref={register} type="text" ClassName="form-control" id="quote" required />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="address">Add Address</label>
                        <br />
                        <input name="address" placeholder="address" ref={register} type="text" ClassName="form-control" id="address" required />
                    </div>
                    <div className="form-group mt-4">
                        <label for="exampleFormControlFile1">Upload a image</label>
                        <input type="file" className="form-control-file" onChange={handleImageUpload} id="exampleFormControlFile1" required />
                    </div>
                </form>
                <button type="submit" className="col-md-1 add-book-btn-input">Submit</button>
            </div>
        </section>
    );
};

export default CustomerReview;