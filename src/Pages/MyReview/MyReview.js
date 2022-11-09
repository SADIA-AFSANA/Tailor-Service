import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    // const url = `http://localhost:5000/myReview?email=${user.email}`;

    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    const handleDelete = id => {
        const proceed = window.confirm('you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h1>hi</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>

                            <th>Name</th>
                            <th>Items</th>
                            <th>Favorite Color</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>




                        {
                            orders.map(review => <MyReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></MyReviewRow>)
                        }



                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyReview;