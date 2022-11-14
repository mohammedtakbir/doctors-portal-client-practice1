import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data, e) => {
        console.log(data);
        userLogin(data.email, data.password)
            .then(res => {
                navigate(from);
                e.target.reset();
                setLoginError('');
                toast.success('login successfully!');
                console.log(res.user)
            })
            .catch(err => {
                setLoginError(err.message);
                console.error(err)
            })
    }

    return (
        <section className='py-[100px] flex justify-center'>
            <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-7">
                <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                    <h5 className="text-xl font-medium text-gray-900 text-center">Log In</h5>
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
                                required: 'Password is required',
                                minLength: { value: 8, message: 'Password should be at least 8 character' }
                            })}
                            type="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        {errors.password && <p className='text-sm text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <Link to="" className="ml-auto text-sm hover:underline">Forgot Password?</Link>
                    {loginError && <p className='text-sm text-red-500 !mt-0'>{loginError}</p>}
                    <button type="submit" className="w-full text-white bg-accent hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log In</button>
                    <div className="text-sm font-medium text-center !mt-3">
                        New to Doctors Portal? <Link to="/signup" className="text-secondary hover:underline">Create new account</Link>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className='text-center'>
                    <SocialLogin />
                </div>
            </div>
        </section>
    );
};

export default Login;