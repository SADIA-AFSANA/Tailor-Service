import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { img, price, title, description } = useLoaderData()
    return (
        <div>
            <h1>serviceDetails</h1>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>price : $ {price}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;