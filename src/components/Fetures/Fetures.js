import React from 'react';
import featuresImg from '../../images/reviews/review3.jpg'

const Fetures = () => {
    return (
        <div>
            <h4>Features</h4>
            <h2>Check out some of our professional
                features!</h2>
            <div className="">
                <img src={featuresImg} alt="" />
            </div>
            <div >
                <h2>The Perfect Service for Medical.</h2>
                <ol>
                    <li>Emergency Embulance</li>
                    <li>Higher clssical instrument</li>
                    <li>24 our open door</li>
                    <li>abailable doctor free</li>
                    <li>available nurse with you</li>
                    <li>intertainment facilities</li>
                </ol>
            </div>

        </div>
    );
};

export default Fetures;