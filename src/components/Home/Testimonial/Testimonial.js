import React from 'react';
import './Testimonial.css';



const Testimonial = (props) => {
    const { quote, name, from, img } = props.testimonial;
    return (
        <div className="card">
            <div className="card-body shadow-sm">
                <h4 class="card-title"><img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" alt="" /></h4>
                <div className="template-demo">
                    <p className="card-text text-center">{quote}</p>
                </div>
                <hr />
                <div className="row">
                    <div class="col-sm-2">
                        <img className="mx-3 profile-pic" src={img} alt="" width="60" />
                    </div>
                    <div class="col-sm-10">
                        <div class="profile">
                            <h4 className="text-primary cust-name">{name}</h4>
                            <p className="m-0 cust-profession">{from}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;