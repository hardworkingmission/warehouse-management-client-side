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
    const [pages,setPages]=useState(0)
    const [page,setPage]=useState(0)
    const [size,setSize]=useState(5)
    const [modalIsOpen,setModalIsOpen]=useState(false)

    const closeModal=()=>{
        setModalIsOpen(false)
    }
    if(create){
        toast('Note has created')
        setCreate(false)
    }
    useEffect(()=>{
        axios.get(`https://secure-eyrie-16583.herokuapp.com/notes?page=${page}&size=${size}`)
             .then((res)=>{
                 setNotes(res.data)
             })

    },[page,size])

    useEffect(()=>{
        axios.get('https://secure-eyrie-16583.herokuapp.com/noteCount')
        .then(res=>{
            const count=parseInt(res.data.noteCount)
            setPages(Math.ceil(count/5))
        })

    },[])


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
            <div className='bg-gray-300 p-2 '>
                {
                    notes?.map(note=>(
                        <div key={note._id} className='mb-2'>
                            <div className='p-2 bg-white rounded-lg'>
                                <p>{note?.note}</p>
                            </div>
                            <h3>{note?.email}|{note.date}</h3>
                        </div>

                    ))
                }
                

            </div>
            <div className='text-center my-3'>
                {
                    [...Array(pages).keys()].map(num=>(
                        <button className={`border border-2 mr-2 py-1 px-2 ${num===page?'bg-gray-300':''}`} onClick={()=>setPage(num)}>{num+1}</button>
                    ))

                }
                {
                    <select name="" id="" className='border border-2 py-1' onClick={(e)=>setSize(e.target.value)}>
                        <option selected value="5">5</option>
                        <option  value="10">10</option>
                    </select>
                }
            </div>
            <ToastContainer/>
        </div>
    );
};

export default UsersNote;