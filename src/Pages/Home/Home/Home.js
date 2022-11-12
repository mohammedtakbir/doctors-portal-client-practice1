import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceCards from '../ServiceCards/ServiceCards';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Banner />
            <InfoCards />
            <ServiceCards />
            <DentalCare />
            <MakeAppointment />
            <Testimonial />
            {/* <Contact /> */}
        </>
    );
};

export default Home;