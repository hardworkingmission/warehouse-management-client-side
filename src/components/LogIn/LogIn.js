import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init';
import useAuthState from '../../hooks/useAuthState/useAuthState';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const LogIn = () => {
    const [state,setState]=useState({email:'',password:''})
    const navigate=useNavigate()
    const initilize={
        email:'',
        password:''

    }
    const [error,setError]=useState('')

    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const{password,email}=state
    const handleSignIn=(e)=>{
        e.preventDefault()
        if(password.length<6){
            setError('Password should be 6 or more characters')
            return;
        }
        signInWithEmailAndPassword(auth,email,password)
           .then((res)=>{
               if(res.user){
                   //navigate('/')
                   setState(initilize)
               }

           }).catch((err)=>{
               setError(err.message)
           })
    }

    const resetPassword=()=>{
        console.log('Reset password')
    }
    //redirect
    const [currentUser,setCurrentUser] =useAuthState()
    let location=useLocation()
    let from = location.state?.from?.pathname || "/";
    if(currentUser.uid){
        navigate(from,{replace:true})
    }

    return (
        <div className='lg:w-2/6 md:w-3/6 w-5/6 mx-auto border border-1 rounded p-5'>
            <h3 className='text-2xl font-bold text-blue-600 text-center'>Please Log In</h3>
            <form action="" className='my-3' onSubmit={handleSignIn}>
                <input className='border-b-2 p-2 w-full outline-none' type="email" name="email" placeholder='Enter Your Email' required value={state.email} onChange={handleChange}/><br /><br />
                <input className='border-b-2 p-2 w-full outline-none' type="password" name="password"  placeholder='Enter Your Password' required value={state.pasword} onChange={handleChange}/><br /><br />
                <p className='text-red-600'>{error&&error}</p>
                <div className='mb-2'>
                    Forget password? <button className='text-blue-600' onClick={resetPassword}>Reset Password</button>
                </div>
                <input type="submit" className='p-2 bg-blue-600 text-white font-bold text-lg rounded w-1/2 cursor-pointer' value="Login" />
                <div className=''>
                    Do not have an account? <Link to={'/signup'} className='text-blue-600'>Sign Up</Link>
                </div>
            </form>
            <div className='flex items-center'>
                <div className='h-[2px] w-full bg-blue-600'></div>
                <p className='mx-2'>Or</p>
                <div className='h-[2px] w-full bg-blue-600'></div>
            </div>
            <div>
                <SocialLogin/>
            </div> 
        </div>
    );
};

export default LogIn;