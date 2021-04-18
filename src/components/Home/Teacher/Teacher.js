import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({teacher}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={teacher.img} alt=""/>
            <h4>{teacher.name}</h4>
            <p className="pt-2"> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {teacher.number}</p>
        </div>
    );
};

export default Doctor;