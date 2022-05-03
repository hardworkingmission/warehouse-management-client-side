import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const AddUserNote = ({setModalIsOpen,setCreate}) => {
    const [user, loading, error] = useAuthState(auth);
    //date
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    const [state,setState]=useState({note:'',email:user?.email,date:date})
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const createNote=(e)=>{
        e.preventDefault()
        axios.post('https://secure-eyrie-16583.herokuapp.com/createnote',state)
           .then((res)=>{
               setModalIsOpen(false)
               if(res.data){
                setCreate(true)
               }
               //console.log(res.data)
           }).catch((err)=>{
               console.log(err.message)
           })
        //console.log(state)
    }
    
    return (
        <div className='w-5/6 mx-auto'>
            <form action="" onSubmit={createNote}>
                <h3 className='text-center text-xl font-bold my-2'>Please note down</h3>
                <textarea name="note" className='mb-2 border-b-2 p-2 outline-none bg-gray-100 w-full rounded' id="" cols="30" placeholder='Note' onChange={handleChange} value={state.note} required/><br />
                <input type="email" name="email" className='mb-2 border-b-2 p-2 outline-none bg-gray-100 w-full rounded' id="" placeholder='Email' onChange={handleChange} value={state.email} required readOnly/><br />
                <input type="date" name="date" className='mb-2 border-b-2 p-2 outline-none bg-gray-100 w-full rounded' id=""  onChange={handleChange} value={state.date}/><br />
                <input type="submit" value="Add" className='bg-gray-300 w-full rounded py-1 font-bold cursor-pointer' />
            </form>
        </div>
    );
};

export default AddUserNote;