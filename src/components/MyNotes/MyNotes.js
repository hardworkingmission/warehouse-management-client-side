import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { confirm } from "react-confirm-box";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {Helmet} from "react-helmet";

const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    },
  }
const MyNotes = () => {
    const [user,loading,error]=useAuthState(auth)
    const [myNotes,setMyNotes]=useState([])
    const email=user?.email
    useEffect(()=>{
        axios.get(`http://localhost:8000/mynotes?email=${email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then((res)=>{
            setMyNotes(res.data)
            })
    },[email])

    //delete an item
    const deleteItem=async(id)=>{
        console.log(id)
        const result = await confirm("Do you want to delete it?",options);
        if(result){
           //setModalIsOpen(false)
           axios.delete(`http://localhost:8000/deleteNote/${id}`)
           .then(res=>{
               if(res.data.deletedCount===1){
                   const restNotes=myNotes?.filter(mynote=>mynote._id!==id)
                   setMyNotes(restNotes)
               }
           }).catch((err)=>{
               console.log(err)
           })
        }


    }
    return (
        <div className="w-5/6 mx-auto">
            <Helmet>
                <title>MyNotes</title>
            </Helmet>
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