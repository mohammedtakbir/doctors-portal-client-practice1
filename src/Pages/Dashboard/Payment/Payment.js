import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_pk);

const Payment = () => {
    const id = useParams();
    const { data: booking = [], isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: () => fetch(`http://localhost:5000/bookings/${id.id}`)
            .then(res => res.json())
    })
    if(isLoading){
        return <Loading />
    }
    const { treatment, appointmentDate, price, slot } = booking;
    return (
        <div>
            <h2 className='text-2xl font-semibold mt-3'>Payment for {treatment}</h2>
            <p>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}.</p>
            <div className='max-w-sm border border-gray-200 shadow-lg p-4 mt-6 rounded-lg'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;