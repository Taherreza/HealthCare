import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [singleService, setSingleService] = useState([])
    useEffect(() => {
        fetch('./serviceData.json')
            .then(res => res.json())
            .then(data => setSingleService(data))

    }, [])
    return (
        <div className="container m-5">

            <div className="home">
                <div className="row">
                    {singleService?.map((childsSingle) => (
                        <div className="col-md-4">
                            <div >
                                <div  >
                                    <img className="w-100 mt-3 mb-3" src={childsSingle.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h4>{childsSingle.name}</h4>
                                    <p> {childsSingle.des}</p>
                                    <Link to={`/allservice/${childsSingle.id}`}>
                                        <button className="btn"> View Details</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;