import React from 'react';

const AboutToo = () => {
    return (

        <div className='my-10 bg-emerald-200'>
            <div>
                <h2 className='text-red-400 text-2xl text-center my-2'>Different types of cloth </h2>
                <p className='text-center my-2'>A tailor is a person who makes or alters clothing, particularly in men's clothing.</p>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Items</th>
                            <th>Name</th>
                            <th> Color</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="tailorbanner.jpeg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Suits

                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn  bg-orange-100 btn-xs">details</button>
                            </th>
                        </tr>

                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/I/71yM0xUAetL._AC._SR360,460.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Shirt

                            </td>
                            <td>Red</td>
                            <th>
                                <button className="btn  bg-orange-100 btn-xs">details</button>
                            </th>
                        </tr>

                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://static-01.daraz.com.bd/p/9f3f12c831e0a526a2cf4063c41862a0.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Touser

                            </td>
                            <td>Crimson</td>
                            <th>
                                <button className="btn  bg-orange-100 btn-xs">details</button>
                            </th>
                        </tr>

                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKefx7ZsDZ3gsgc2R7erpHcvXTpepSI8CuP2PwKWAd&s" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yancy Tear</div>
                                        <div className="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Panjabi

                            </td>
                            <td>Indigo</td>
                            <th>
                                <button className="btn bg-orange-100 btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>

                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default AboutToo;