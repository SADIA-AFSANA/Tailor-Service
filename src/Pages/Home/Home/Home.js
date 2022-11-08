import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import AboutToo from '../Aboutto/AboutToo';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AboutToo></AboutToo>
        </div>
    );
};

export default Home;