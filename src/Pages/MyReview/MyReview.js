import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    // const url = `https://tailor-service-server.vercel.app/myReview?email=${user.email}`;

    useEffect(() => {
        fetch(`https://tailor-service-server.vercel.app/myReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                // console.log('received', data)
                setOrders(data)
            })
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('you want to delete this review');
        if (proceed) {
            fetch(`https://tailor-service-server.vercel.app/review/${id}`, {
                method: 'DELETE', headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
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

    const handleStatusUpdate = id => {
        fetch(`https://tailor-service-server.vercel.app/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved'
                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl text-orange-500'> You have {orders.length} review</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

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
                                handleStatusUpdate={handleStatusUpdate}
                            ></MyReviewRow>)
                        }



                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyReview;