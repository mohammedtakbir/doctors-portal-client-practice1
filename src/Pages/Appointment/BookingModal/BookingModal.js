import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots, price } = treatment; //* treatment is just another name of appointmentOption with name, slots, _id
    const date = format(selectedDate, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            treatment: treatment.name,
            appointmentDate: date,
            patient: name,
            phone,
            email,
            price,
            slot
        };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    toast.success('booking confirm')
                    setTreatment(null);
                } else {
                    toast.error(data.message)
                }
            })

    }

    //* TODO: send data to the server 
    //* and once data is saved then close the modal
    //* and display success toast 

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold pb-3">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input
                            type="text"
                            value={date}
                            disabled
                            className="input input-bordered w-full mt-4"
                        />
                        <select
                            name='slot'
                            className="select select-bordered w-full mt-4"
                        >
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}>{slot}
                                </option>)
                            }
                        </select>
                        <input
                            disabled
                            defaultValue={user?.displayName}
                            name='name'
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full mt-4"
                        />
                        <input
                            required
                            name='phone'
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered w-full mt-4"
                        />
                        <input
                            disabled
                            defaultValue={user?.email}
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full mt-4"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className='btn btn-accent w-full mt-5'
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;