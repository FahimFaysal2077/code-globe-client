import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {

    const history = useHistory();

    const handleClick = (id) => {
        const url = `/destination/${id}`;
        history.push(url);
    }

    return (
        <div className="col-md-4 text-center services">
            <div class="service-box">
                <div>
                    <img  className="image-container" src={service.img} alt="" />
                </div>
                <h5 className="mt-3 mb-3"><Link to="">{service.title}</Link></h5>
                <p className="text-secondary">{service.description}</p>
                <h3 className="text-info">{service.price}</h3>
                <Link onClick={() => handleClick(service.id)} to="#" class="btn btn-success center-block mt-2 mb-2">Read More »</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;