import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center services">
            <div class="service-box">
                <div>
                    <img style={{ height: '50px' }} src={service.img} alt="" />
                </div>
                <h5 className="mt-3 mb-3"><Link to="">{service.name}</Link></h5>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
                <Link to="#" class="btn btn-success center-block mt-2 mb-2">Read More »</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;