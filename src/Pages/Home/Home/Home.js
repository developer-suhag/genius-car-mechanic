import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => (
    <div style={{ padding: '20px 40px' }}>
        <Banner />
        <Services />
        <Experts />
    </div>
);

export default Home;
