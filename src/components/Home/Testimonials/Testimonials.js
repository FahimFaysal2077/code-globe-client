import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-crag-04507.herokuapp.com/testimonials')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h3 className="text-danger text-uppercase">Testimonial</h3>
                    <h1>What Our "STUDENTS" <br /> Says </h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;