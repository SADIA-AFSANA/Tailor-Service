import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { img, price, title, description } = useLoaderData()
    return (
        <div>
            <h1>serviceDetails</h1>

            <h1>{description}</h1>
        </div>
    );
};

export default ServiceDetails;