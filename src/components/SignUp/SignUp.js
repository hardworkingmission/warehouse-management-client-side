import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import {verifyPassword} from '../../utilites/passwordVerification'

import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import SocialLogin from '../SocialLogin/SocialLogin';
import CustomSpinner from '../CustomSpinner/CustomSpinner';
import Helmet from 'react-helmet';

const SignUp = () => {
    const [state,setState]=useState({name:'',email:'',password:'',confirmPassword:''})
    const [agree,setAgree]=useState(false)
    const [errors,setErrors]=useState([])
    const navigate=useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        authError,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    useEffect(()=>{
        if(authError){
            const tem=[]
            tem.push(authError.message)
            setErrors(tem)
            console.log(authError.message)
            return;
            }
            if(user){
                navigate('/')
            }

    },[authError,user,navigate])
    if(loading){
        return <CustomSpinner/>
    }
    
    const initialize={
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const {name,email,password,confirmPassword}=state
    const createUserWithEmailPassword=(e)=>{
           e.preventDefault()
           const findErrors=verifyPassword(password,confirmPassword)
           if(findErrors.length>0){
               setErrors(findErrors)
               return;
           }
           //setErrors([])
           console.log(email,password)
           createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='w-5/6 mx-auto flex justify-center my-3'>
            <Helmet>
                <title>Signup</title>
            </Helmet>
            <div className='lg:w-[40%] md:w-[50%] w-[80%] p-2 border-2 rounded'>
                <h1 className='md:text-3xl font-bold text-center my-2'>Signup for account</h1>
                <form action="" className='' onSubmit={createUserWithEmailPassword}>

                    <label htmlFor="name" className='block'>Name</label>
                    <input type="text" name='name' className='border-b-2 mb-2 p-2 w-full outline-none bg-gray-100 rounded' onChange={handleChange} value={state.name} required/><br />

                    <label htmlFor="email" className='block'>Email Address</label>
                    <input type="email" name="email" id=""  className='border-b-2 mb-2 p-2 w-full outline-none bg-gray-100 rounded' onChange={handleChange} value={state.email} required/><br />

                    <label htmlFor="password" className='block'>Password</label>
                    <input type="password" name='password' className='border-b-2 mb-2 p-2 w-full outline-none bg-gray-100 rounded' onChange={handleChange} value={state.password} required/><br />

                    <label htmlFor="confirmPassword" className='block'>Confirm Password</label>
                    <input type="password" name='confirmPassword' className='border-b-2 mb-2 p-2 w-full outline-none bg-gray-100 rounded' onChange={handleChange} value={state.confirmPassword} required/><br />

                    <div className=''>
                        <div>
                            <input type="checkbox" name="agree" id="agree" onChange={(e)=>setAgree(e.target.checked)} className={`ml-2 ${agree?"accent-green-600":''}`}/>
                            <label className={`ml-2 ${agree?"text-green-600":''}`} htmlFor="agree">Remember Me</label>
                        </div>
                    </div>
                    <div>
                        {
                            errors.map(error=>(
                                <p className='text-center my-2 text-red-600'>{error}</p>
                            ))
                        }
                    </div>
                    <input type="submit" value="Sign Up" className='p-2 bg-gray-300 w-full rounded-lg font-bold cursor-pointer' disabled={agree?false:true}/>
                </form>
                <div  className='md:flex my-1'>
                    <p>Have an account?</p>
                    <Link to={'/login'} className="text-blue-600 underline ml-2">LogIn</Link>
                </div>
                <div className='flex items-center my-2'>
                    <div className='h-[2px] w-full bg-gray-300'></div>
                    <p className='mx-2'>or</p>
                    <div className='h-[2px] w-full bg-gray-300'></div>
                </div>
                <div className="scoial-login">
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default SignUp;