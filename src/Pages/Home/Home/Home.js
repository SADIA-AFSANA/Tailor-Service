import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import AboutToo from '../Aboutto/AboutToo';
import Banner from '../Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home')
    const navigate = useNavigate()
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AboutToo></AboutToo>
            <Services limit={3}></Services>
            <button onClick={() => navigate('/services')} className="btn btn-success px-10 mt-3 mx-auto"> See All </button>
        </div>
    );
};

export default Home;