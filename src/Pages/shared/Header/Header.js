import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    return (
        <div>

            <div className="navbar bg-primary text-primary-content">
                <img className='img ' src="tailorbanner.jpeg" alt="" />
                <Link to="/" className="btn btn-ghost normal-case text-xl">Tailor-Service</Link>
                <div className='header '>
                    <Link to='/home'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/blog'>Blogs</Link>

                    {/* <Link to='/myReview'>myReview</Link> */}

                    {
                        user?.email ?
                            <>
                                <Link to='/myReview'>myReview</Link>
                                <button onClick={handleLogOut} className='btn btn-ghost'>SignOut</button>
                            </>
                            :
                            <Link to='/login'>Login</Link>}

                    {/* <Link to='/signup'>Sign up</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;