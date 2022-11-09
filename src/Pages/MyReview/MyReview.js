import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({})



    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <h2>You Have all {reviews.length}</h2>
        </div>
    );
};

export default MyReview;