import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='w-5/6 mx-auto flex justify-center my-3'>
            <div className='lg:w-[40%] md:w-[50%] w-[80%] p-2 border-2 rounded'>
                <h1 className='md:text-3xl font-bold text-center my-2'>Login to your account</h1>
                <form action="" className=''>

                    <label htmlFor="email" className='block'>Email Address</label>
                    <input type="email" name="email" id=""  className='border-b-2 mb-2 p-2 w-full outline-none bg-gray-100 rounded'/><br />
                    <label htmlFor="password" className='block'>Password</label>
                    <input type="text" name='password' className='border-b-2 mb-2 p-2 w-full outline-none bg-gray-100 rounded'/><br />
                    <div className='md:flex justify-between'>
                        <div>
                            <input type="checkbox" name="agree" id="agree" />
                            <label className='ml-2' htmlFor="agree">Remember Me</label>
                        </div>
                        <p className='underline'>I forget my password</p>
                    </div>
                    <p className='text-center my-2 text-red-600'>Error</p>
                    <input type="submit" value="Log In" className='p-2 bg-gray-300 w-full rounded-lg font-bold cursor-pointer'/>
                </form>
                <div className='md:flex my-1'>
                    <p>Have no account?</p>
                    <Link to={'/signup'} className=" text-blue-600 underline ml-2">SignUp</Link>
                </div>
                <div className='flex items-center my-2'>
                    <div className='h-[2px] w-full bg-gray-300'></div>
                    <p className='mx-2'>or</p>
                    <div className='h-[2px] w-full bg-gray-300'></div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;