import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notFoundImg} alt="" /><br />
            <Link to="/home">Back to Home???</Link>

        </div>
    );
};

export default NotFound;