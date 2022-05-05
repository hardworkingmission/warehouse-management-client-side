import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { confirm } from "react-confirm-box";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import CustomConfirm from '../CustomConfirm/CustomConfirm';

const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    },
  }
const MyNotes = () => {
    const navigate=useNavigate()
    const [user,loading,error]=useAuthState(auth)
    const [myNotes,setMyNotes]=useState([])
    const email=user?.email
    useEffect(()=>{
            axios.get(`https://secure-eyrie-16583.herokuapp.com/mynotes?email=${email}`,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then((res)=>{
                //console.log(res.response.status)
                setMyNotes(res.data)
                })
                .catch(async(err)=>{
                    if(err.response.status===403||err.response.status===401)
                    {   await signOut(auth)
                        navigate('/login')
                    }
                    console.log('Error',err.response.status)

                })
           
        
           
    },[email,navigate])
    //custom confirm
    const [modalIsOpen,setModalIsOpen]=useState(false)
    const [noteId,setNoteId]=useState('')
    const closeModal=()=>{
        console.log('close')
        setModalIsOpen(false)
    }
    const handleConfirm=(confirm)=>{
        if(confirm){
            setModalIsOpen(false)
            axios.delete(`https://secure-eyrie-16583.herokuapp.com/deleteNote/${noteId}`)
            .then(res=>{
                if(res.data.deletedCount===1){
                    const restNotes=myNotes?.filter(myNote=>myNote._id!==noteId)
                    setMyNotes(restNotes)
                }
            }).catch((err)=>{
                console.log(err)
            })
         }

    }

    //delete an item
    const deleteItem=(id)=>{
        setNoteId(id)
        setModalIsOpen(true)
    }
    return (
        <div className="w-5/6 mx-auto">
            <Helmet>
                <title>MyNotes</title>
            </Helmet>
            <CustomConfirm modalIsOpen={modalIsOpen} closeModal={closeModal} handleConfirm={handleConfirm} />
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Note
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Email
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Date
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    myNotes?.map(myNote=>(
                                    <tr key={myNote._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {myNote?.note}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {myNote?.email}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {myNote?.date}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap text-center">
                                    <button className=' bg-red-600 text-white px-2 py-1 rounded ' onClick={()=>deleteItem(myNote._id)}><FontAwesomeIcon icon={faTrash}/></button>
                                    </td>
                                </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyNotes;