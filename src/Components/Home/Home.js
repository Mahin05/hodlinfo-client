import React from 'react';
import BeforeFooter from '../BeforeFooter/BeforeFooter';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SecondSection from '../secondSection/SecondSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SecondSection></SecondSection>
            <Details></Details>
            <BeforeFooter></BeforeFooter>
            <hr></hr>
            <Footer></Footer>
        </div>
    );
};

export default Home;