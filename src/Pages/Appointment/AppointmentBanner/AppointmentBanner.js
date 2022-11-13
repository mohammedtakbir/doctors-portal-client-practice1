import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <section className='pt-[150px] pb-[120px]' style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={chair} className="md:max-w-xl shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You have selected: {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;