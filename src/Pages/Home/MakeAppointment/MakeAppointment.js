import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            backgroundImage: `url(${appointment})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="hero">
                <div className="hero-content md:p-0 py-[60px] flex-col lg:flex-row">
                    <img alt='/' src={doctor} className="lg:w-1/2 md:w-[70%] -mt-32 md:block hidden" />
                    <div className='p-2 text-white lg:mx-0 mx-3'>
                        <h3 className="text-xl font-bold text-secondary mb-5">Appointment</h3>
                        <h2 className="text-[36px] font-semibold md:leading-none leading-10">Make an appointment Today</h2>
                        <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;