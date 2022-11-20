import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../Components/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'PP')

    //* fetch data using react query
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })

    if(isLoading){
        return <Loading />
    }

    return (
        <section className='py-[100px]'>
            <h2 className='text-center text-secondary text-[22px] font-medium mb-[70px]'>Available Appointments on {format(selectedDate, 'PP')}</h2>
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment &&
                <BookingModal
                    refetch={refetch}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                />}
        </section>
    );
};

export default AvailableAppointment;