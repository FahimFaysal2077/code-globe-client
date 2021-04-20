import React from 'react';
import { Link } from 'react-router-dom';
import './TransactionSideBar.css';
import book from '../../../images/book.png';
import bookingList from '../../../images/bookingList.png';
import review from '../../../images/review.png';

const TransactionSideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between   py-5 px-4" style={{height:"100vh", width: "34vh"}}>
        <ul className="list-unstyled">
            <li>
                <Link to="/book">
                    <img className="logo-image-small" src={book} alt=""/> <span className="text-font-sidebar">Book</span> 
                </Link>
            </li>
            <li>
                <Link to="/bookingList">
                    <img  className="logo-image-small" src={bookingList} alt=""/> <span  className="text-font-sidebar">Booking List</span> 
                </Link>
            </li>
            <li>
                <Link to="/addReview">
                    <img  className="logo-image-small" src={review} alt=""/> <span  className="text-font-sidebar">Review</span>
                </Link>
            </li>
        </ul>
    </div>
    );
};

export default TransactionSideBar;