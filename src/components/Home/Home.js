import React, { useEffect, useState } from 'react';
import './Home.css'
import slider1 from '../../images/banner/slider01.jpg';
import slider2 from '../../images/banner/slider02.jpg';
import slider3 from '../../images/banner/slider03.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('./homeData.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="container-fluid all-section">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slider3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* servisec option */}
            <div className="services mt-5">
                <div className="row">
                    {service?.map((services) => (
                        <div className="col-md-3">
                            <div  >
                                <div >
                                    <img className="w-100 mb-3" src={services.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h4>{services.name}</h4>
                                    <p>  {services.des}</p>
                                    <Link to="/services">
                                        <button className="btn"> View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            {/* extra option */}
            <div className="medical-service mt-5">
                <div className="medical-sevice-top">
                    <h2>Our Medical Service</h2>
                    <p>We're different from typical health checkup center. We're out to create magic. The goal is to WOW you with outstanding treatment.</p>
                </div>

                <div className="medical-sevice-bottom">
                    <div className="service-details">
                        <h3>Robotic Surgery</h3>
                        <p>Here are a tremeders robotic surgery that your are not belive my outstanding services.</p>
                    </div>
                    <div className="service-details">
                        <h3>Women’s Care</h3>
                        <p>Women care is very beautiful they all time serve for any one condition and situation.</p>
                    </div>
                    <div className="service-details">
                        <h3>Cancer Services</h3>
                        <p>We know cancer is the dangerous dieases but no tention We have a great service for you.</p>
                    </div>
                    <div className="service-details">
                        <h3>Emergency Services</h3>
                        <p>If you need any emergency service no tention we are always with you for any  kind of help.</p>
                    </div>
                </div>

            </div>
            {/* extra option2 */}
            <div className="hurry mt-5">
                <h2>Confirm Booking</h2>
                <p>All Time Service Available </p>
            </div>
            <div className="hurry-up mt-5">
                <h1>Hurry up! and get Free treatment for first 50 person</h1>
                <h3>Please Call Us:(080) 123 456 7890</h3>
                <h3> Or Email: care@domain.com</h3>
                <p>Limited time offer for this month. No credit card required.</p>

            </div>

        </div>
    );
};

export default Home;