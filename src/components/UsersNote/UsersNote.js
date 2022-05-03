import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import AddUserNote from '../AddUserNote/AddUserNote';
import CustomModal from '../CustomModal/CustomModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const UsersNote = () => {
    const [user, loading, error] = useAuthState(auth);
    const[notes,setNotes]=useState([])
    const [create,setCreate]=useState(false)
    const navigate=useNavigate()
    const [modalIsOpen,setModalIsOpen]=useState(false)

    const closeModal=()=>{
        setModalIsOpen(false)
    }
    if(create){
        toast('Note has created')
        setCreate(false)
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/notes')
             .then((res)=>{
                 setNotes(res.data)
             })

    },[create])

    const handleNote=()=>{
        if(user?.email){
            setModalIsOpen(true)
        }else{
            navigate('/login')
        }
        
    }
    return (
        <div className="w-full mx-auto">
            <CustomModal closeModal={closeModal} modalIsOpen={modalIsOpen}>
                <AddUserNote setModalIsOpen={setModalIsOpen} setCreate={setCreate}/>
            </CustomModal>
            <h1 className='text-center text-4xl font-bold my-3'>Users Notes</h1>
            <div className='text-center'>
                <button className='text-5xl font-bold text-gray-600' onClick={handleNote}>+</button>
            </div>
            <div className='bg-gray-300 p-2'>
                {
                    notes?.map(note=>(
                        <div key={note._id}>
                            <div className='p-2 bg-white rounded-lg'>
                                <p>{note?.note}</p>
                            </div>
                            <h3>{note?.email}|{note.date}</h3>
                        </div>

                    ))
                }
                

            </div>
            <ToastContainer/>
        </div>
    );
};

export default UsersNote;