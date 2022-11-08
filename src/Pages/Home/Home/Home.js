import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import AboutToo from '../Aboutto/AboutToo';
import Banner from '../Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AboutToo></AboutToo>
            <Services></Services>
        </div>
    );
};

export default Home;