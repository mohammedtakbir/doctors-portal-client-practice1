import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useToken } from '../../Hooks/useToken';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/');
    }

    const handleLogin = (data, e) => {
        const userInfo = {
            displayName: data.name
        };
        createUser(data.email, data.password)
            .then(res => {
                handleUpdateUserProfile(userInfo);
                saveUserInfo(data.name, data.email);
                e.target.reset();
                setSignUpError('');
                toast.success('signup successfully!')
                console.log(res.user)
            })
            .catch(err => {
                setSignUpError(err.message);
                console.error(err)
            })
    };

    const handleUpdateUserProfile = (userInfo) => {
        updateUserProfile(userInfo)
            .then(() => { })
            .catch(err => console.error(err))
    };

    const saveUserInfo = (name, email) => {
        const user = { name, email }
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                console.log(data);
            })
    }


    return (
        <section className='py-[100px] flex justify-center'>
            <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-7">
                <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                    <h5 className="text-xl font-medium text-gray-900 text-center">Sign Up</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input
                            {...register('name', { required: 'Name is Required' })}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Your Name"
                        />
                        {errors.name && <p className='text-sm text-red-500'>{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                            {...register('email', { required: 'Email address is Required' })}
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Your email"
                        />
                        {errors.email && <p className='text-sm text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input
                            {...register('password', {
                                required: 'Password is Required',
                                minLength: { value: 8, message: 'Password should be at least 8 character' },
                                pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: 'Minimum eight characters, at least one letter and one number' }
                            })}
                            type="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        {errors.password && <p className='text-sm text-red-500'>{errors.password?.message}</p>}
                    </div>
                    {signUpError && <p className='text-sm text-red-500 !mt-0'>{signUpError}</p>}
                    <button type="submit" className="w-full text-white bg-accent hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                    <div className="text-sm font-medium text-center !mt-3">
                        Already have an account? <Link to="/login" className="text-secondary hover:underline">Log In</Link>
                    </div>
                </form>
                <div className="divider">OR</div>
                <SocialLogin />
            </div>
        </section>
    );
};

export default Signup;