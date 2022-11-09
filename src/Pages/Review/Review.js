import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = user?.email || 'please login';
        const review = form.review.value;

        const reviewDb = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            review,

        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDb)
        }

        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review done')
                    form.reset()
                }
            })
            .catch(er => console.error(er));
    }


    return (
        <form onSubmit={handleReview}>
            <h2 className='text-4xl'>Your review with the {title}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-5'>
                <input name="name" type="text" placeholder="Your name" className="input input-ghost input-bordered w-full max-w-xs" />
                <input name="phone" type="text" placeholder="Your phone" className="input input-ghost input-bordered w-full max-w-xs" />
                <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost input-bordered w-full max-w-xs" readOnly />

            </div>
            <textarea name="review" className="textarea textarea-success my-9 mx-10 px-6 py-10 w-1/2" placeholder="Please write your review in here"></textarea>
            <input className='btn border-t-red-300' type="submit" value="Review" />
        </form>
    );
};

export default Review;