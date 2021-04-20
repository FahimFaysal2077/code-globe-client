import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className="services-container mt-5 pt-5">
            <div className="text-center">
                <h1 style={{color: '#1CC7C1'}}>OUR COURSES</h1>
                <h2>The world's largest selection of courses</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;