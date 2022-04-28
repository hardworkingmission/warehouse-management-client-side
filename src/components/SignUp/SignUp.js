import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const [state,setState]=useState({name:'',email:'',password:'',confirmPassword:''})
    const initialize={
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const [error,setError]=useState('')
    const {name,password,confirmPassword,email}=state

    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const createUser=(e)=>{
        e.preventDefault()
        //createUserWithEmailAndPassword()
        if(password.length<6){
            setError('Password should be 6 or more characters')
            return;
        }
        if(password!==confirmPassword){
            setError('Passwords have not matched')
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
          .then((res)=>{
              if(res.user){
                  setError('')
                  setState(initialize)
                  toast('User has created successfully')
              }

          })
          .catch((error)=>{
              setError(error.message)
          })
        console.log(state)
    }

    return (
        <div className='lg:w-2/6 md:w-3/6 w-5/6 mx-auto border border-1 rounded p-5'>

            <h3 className='text-2xl font-bold text-blue-600 text-center'>Please Sign Up</h3>

            <form action="" className='my-3' onSubmit={createUser}>
                <input className='border-b-2 p-2 w-full outline-none' type="text" name="name" placeholder='Name' required autoComplete='off' value={name} onChange={handleChange}/><br /><br />
                <input className='border-b-2 p-2 w-full outline-none' type="email" name="email" placeholder='Email' required autoComplete='off' value={email} onChange={handleChange}/><br /><br />

                <input className='border-b-2 p-2 w-full outline-none' type="password" name="password"  placeholder='Password' required autoComplete='off' value={password} onChange={handleChange}/><br /><br />

                <input className='border-b-2 p-2 w-full outline-none' type="password" name="confirmPassword"  placeholder='Confirm Password' required autoComplete='off' value={confirmPassword} onChange={handleChange}/><br /><br />
                 <p className='text-red-600'>{error&&error}</p>
                <input type="submit" className='p-2 bg-blue-600 text-white font-bold text-lg rounded w-1/2 cursor-pointer' value="Sign Up" />

                <div className=''>
                    Already have an account? <Link to={'/login'} className='text-blue-600'>Login</Link>
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
            <ToastContainer/>
        </div>
    );
};

export default SignUp;