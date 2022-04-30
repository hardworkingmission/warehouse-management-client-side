import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const LogIn = () => {
    const [agree,setAgree]=useState(false)
    const navigate=useNavigate()
    const [state,setState]=useState({email:'',password:''})
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        loginError,
      ] = useSignInWithEmailAndPassword(auth);
    const [error,setError]=useState('')

    //redirect
    const location =useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        if(loginError){
            setError(loginError.message)
            return;
        }
        if(user){
            console.log(user)
            navigate(from,{replace:true})       
        }
    },[loginError,user,navigate,from])
    const initialize={
        email:'',
        password:''
    }
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const {email,password}=state
    const userLogIn=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)


    }

    return (
        <div className='w-5/6 mx-auto flex justify-center my-3'>
            <div className='lg:w-[40%] md:w-[50%] w-[80%] p-2 border-2 rounded'>
                <h1 className='md:text-3xl font-bold text-center my-2'>Login to your account</h1>
                <form action="" className='' onSubmit={userLogIn}>

                    <label htmlFor="email" className='block'>Email Address</label>
                    <input type="email" name="email" id=""  className='border-b-2 mb-2 p-2 w-full outline-none bg-gray-100 rounded' onChange={handleChange} value={state.email} required/><br />
                    <label htmlFor="password" className='block'>Password</label>
                    <input type="password" name='password' className='border-b-2 mb-2 p-2 w-full outline-none bg-gray-100 rounded' onChange={handleChange} value={state.password} required/><br />
                    <div className='md:flex justify-between'>
                        <div>
                            <input type="checkbox" name="agree" id="agree" onChange={(e)=>setAgree(e.target.checked)} className={`ml-2 ${agree?"accent-green-600":''}`}/>
                            <label className={`ml-2 ${agree?"text-green-600":''}`} htmlFor="agree">Remember Me</label>
                        </div>
                        <p className='underline'>I forget my password</p>
                    </div>
                    <p className='text-center my-2 text-red-600'>{error&&error}</p>
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