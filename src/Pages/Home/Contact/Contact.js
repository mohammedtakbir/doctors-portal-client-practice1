import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section className='mt-10 makeAppoint-bg py-[75px]' style={{
            backgroundImage: `url(${appointment})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className='text-center md:mb-[60px] mb-[30px] md:mx-0 mx-3'>
                <h3 className="text-xl font-bold text-secondary">Contact Us</h3>
                <h2 className="text-[36px] font-normal text-white">Stay connected with us</h2>
            </div>
            <form className='max-w-md sm:mx-auto mx-4'>
                <div className="relative mb-5">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="email-address-icon"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                        placeholder="Email Address"
                    />
                </div>
                <div className="relative mb-5">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="email-address-icon"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                        placeholder="Subject"
                    />
                </div>
                <div className='mb-7'>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className='text-center'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default Contact;