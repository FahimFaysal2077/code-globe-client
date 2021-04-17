import React from 'react';
import Teacher from '../Teacher/Teacher';
const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    <Teacher/>
                    <Teacher/>
                    <Teacher/>
                </div>
            </div>
        </section>
    );
};

export default Doctors;