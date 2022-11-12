import React from 'react';
import banner from '../../../assets/images/chair.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import bannerBgImg from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <>
            <div className="hero lg:pt-[170px] lg:pb-[200px] py-12" style={{
                backgroundImage: `url(${bannerBgImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="rounded-lg shadow-2xl lg:w-1/2 md:w-[90%]" alt='' />
                    <div className='lg:w-1/2 md:w-[90%] lg:mt-0 mt-5'>
                        <h1 className="text-5xl font-bold text-[#3A4256]">Your New Smile Starts Here</h1>
                        <p className="py-6 text-[#3A4256]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;