import { Result } from 'postcss';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    useTitle('Login')
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                fetch(`http://localhost:5000/jwt`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                // navigate(from, { replace: true })


            })
            .catch(error => console.log(error));

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 w-full">
                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2 mx-auto">
                        <img src="tailorbanner.jpeg" alt="" />
                        <p className="py-6 text-2xl font-semibold text-orange-500">Login credentials authenticate a user when logging into an online account over the Internet.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-4">
                        <h1 className="text-5xl text-center font-bold text-orange-500 my-5">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>
                        </form>
                        <p className='mb-10 text-center'>New to service <Link className='text-orange-400 font-bold' to="/signup">Sign Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;