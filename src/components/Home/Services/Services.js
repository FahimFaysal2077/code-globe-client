import React from 'react';
import python from '../../../images/python.jpg';
import bootstrap from '../../../images/bootstrap.jpg';
import javascript from '../../../images/javascript.jpg';
import mongodb from '../../../images/mongodb.png';
import firebase from '../../../images/firebase.png';
import html5 from '../../../images/html5.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    
    {
        title: 'mongoDB',
        img: mongodb,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
        price: '$99'
    },
    {
        title: 'Python',
        img: python,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
        price: '$219'
    },
    {
        title: 'BootStrap',
        img: bootstrap,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
        price: '$250'
    },
    {
        title: 'JavaScript',
        img: javascript,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
        price: '$42'
    },
    {
        title: 'Firebase',
        img: firebase,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
        price: '$86'
    },
    {
        title: 'HTML5',
        img: html5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?',
        price: '$150'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5 pt-5">
            <div className="text-center">
                <h1 style={{color: '#1CC7C1'}}>OUR COURSES</h1>
                <h2>The world's largest selection of courses</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;