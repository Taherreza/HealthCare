import React from 'react';
import { useParams } from 'react-router';

const ServiceAll = () => {
    const { serviceAll } = useParams();
    return (
        <div>
            <h2>{serviceAll}</h2>
        </div>
    );
};

export default ServiceAll;