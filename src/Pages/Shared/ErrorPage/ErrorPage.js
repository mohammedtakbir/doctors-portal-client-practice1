import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <div className='text-red-500 flex min-h-screen items-center justify-center'>
                <div>
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                    <Link to='/'>
                        <button className='btn btn-accent btn-sm text-white mt-2'>Back to Homepage</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;