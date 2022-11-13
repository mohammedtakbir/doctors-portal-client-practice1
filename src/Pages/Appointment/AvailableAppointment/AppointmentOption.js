import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    console.log(slots)
    return (
        <>
            <div className="card shadow-xl border">
                <div className="card-body items-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{slots.length < 1 ? 'Try Another Day' : slots[0]}</p>
                    <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                    <div className="card-actions justify-end">
                        <PrimaryButton>Book Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentOption;