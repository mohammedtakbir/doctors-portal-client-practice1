import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceCards from '../ServiceCards/ServiceCards';

const Home = () => {
    return (
        <>
            <Banner />
            <InfoCards />
            <ServiceCards />
            <DentalCare />
            <MakeAppointment />
        </>
    );
};

export default Home;