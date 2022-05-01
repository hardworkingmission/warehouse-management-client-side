import React from 'react';
import google from '../../images/social-icons/google.png'
import github from '../../images/social-icons/github.png'

const SocialLogin = () => {
    return (
        <div className='md:flex justify-center md:justify-around'>
            <button className='flex items-center font-bold text-sm w-full bg-gray-300 p-1 mb-2 rounded-lg'><img src={google} alt="" className='h-[30px] w-[30px] rounded-[50%]'/>Login with Google</button>
            <button className='flex items-center font-bold text-sm w-full bg-gray-300 p-1 mb-2 rounded-lg md:ml-1'><img src={github} alt="" className='h-[30px] w-[30px] bg-white rounded-[50%]'/>Login with Github</button>
        </div>
    );
};

export default SocialLogin;