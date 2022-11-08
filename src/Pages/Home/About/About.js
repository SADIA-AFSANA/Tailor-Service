import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-yellow-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img src="tailorbanner2.jpeg" alt="" className="w-10/12 rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-4xl font-bold">Free Lifetime <br />Alterations!</h1>
                        <p className="py-6">Tailors are responsible for constructing, altering, repairing, or modifying garments for customers based on their specifications, needs, and preferences..</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;