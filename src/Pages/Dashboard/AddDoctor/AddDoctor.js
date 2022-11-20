import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: specialties = [] } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: () => fetch(`http://localhost:5000/appointmentSpecialty`)
            .then(res => res.json())
    });

    const imgHostKey = process.env.REACT_APP_imgbbKey

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                };

                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            navigate('/dashboard/manageDoctors');
                            toast.success('added doctor successfully')
                            console.log(data)
                        }
                    })
            })

    };


    return (
        <div>
            <h2 className='text-[24px] font-semibold my-2'>Add A New Doctor</h2>
            <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-7">
                <form className="space-y-6" onSubmit={handleSubmit(handleAddDoctor)}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input
                            {...register('name', { required: 'Name is Required' })}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter Your Name"
                        />
                        {errors.name && <p className='text-sm text-red-500'>{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                            {...register('email',
                                { required: 'Email address is Required' }
                            )}
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter Your email"
                        />
                        {errors.email && <p className='text-sm text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Specialty</label>
                        <select
                            className="select select-bordered w-full max-w-xs"
                            {...register('specialty',
                                { required: 'specialty is required' }
                            )}
                        >
                            <option disabled selected>Pick A Specialty</option>
                            {
                                specialties.map(specialty => (
                                    <option
                                        key={specialty._id}
                                        value={specialty.name}
                                    >{specialty.name}</option>
                                ))
                            }
                        </select>
                        {errors.specialty && <p className='text-sm text-red-500'>{errors.specialty?.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Photo</label>
                        <input
                            {...register('image',
                                { required: 'Image is Required' }
                            )}
                            type="file"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter Your email"
                        />
                        {errors.image && <p className='text-sm text-red-500'>{errors.image?.message}</p>}
                    </div>
                    <button type="submit" className="w-full text-white bg-accent hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;