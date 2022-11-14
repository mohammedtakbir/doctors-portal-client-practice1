import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='py-[100px] flex justify-center'>
            <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-7">
                <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 text-center">Log In</h5>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input
                            type="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Your email"
                        />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input t
                            ype="password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <Link to="" class="ml-auto text-sm hover:underline">Forgot Password?</Link>
                    <button type="submit" class="w-full text-white bg-accent hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log In</button>
                    <div class="text-sm font-medium text-center !mt-3">
                        New to Doctors Portal? <Link to="/signup" class="text-secondary hover:underline">Create new account</Link>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className='text-center'>
                    <button type="button" class="hover:bg-accent border-2 border-gray-700 hover:text-white focus:ring-2 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Continue with Google
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;