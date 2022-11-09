import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-300 font-semibold'>$ {price}</p>

                    {description?.length > 100 ?
                        <p>{description?.slice(0, 100) + '...'}<Link to={`/serviceDetails/${_id}`}><button className='text-blue-600'>read more</button></Link></p>
                        :
                        <p>{description}</p>

                    }
                    <div className="card-actions justify-end">
                        <Link to={`/review/${_id}`}>  <button className="btn btn-primary">Review</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;