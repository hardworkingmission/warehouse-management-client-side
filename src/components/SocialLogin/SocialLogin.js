import React, { useEffect, useState } from 'react';
import google from '../../images/social-icons/google.png'
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomSpinner from '../CustomSpinner/CustomSpinner'
import axios from 'axios';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [error,setError]=useState('')
    const location=useLocation()
    const navigate=useNavigate()
    let from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        if(googleError){
            setError(googleError.message)
            return;
        }
        if(googleUser){
            const email=googleUser.user.email
            axios.post('http://localhost:8000/generateJWT',{email})
            .then((res)=>{
                localStorage.setItem('accessToken',res.data)
                console.log(res.data)
            })
            navigate(from,{replace:true})       
        }
        
    },[googleError,from,navigate,googleUser])
    const handleLoginWithGoogle=async ()=>{
        signInWithGoogle()
        //console.log(googleUser)


    }
    
    return (
        <div className='text-center'>
            <p className='text-red-600 my-2'>{error&&error}</p>
            <button className='flex items-center font-bold w-full bg-gray-300 p-1 justify-center rounded-lg' onClick={handleLoginWithGoogle}><img src={google} alt="" className='h-[30px] w-[30px] rounded-[50%]'/>Login with Google</button>
           
        </div>
    );
};

export default SocialLogin;