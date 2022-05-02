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
const MyItems = () => {
    const [user,loading,error]=useAuthState(auth)
    const [myItems,setMyItems]=useState([])
    const email=user?.email
    useEffect(()=>{
        axios.get(`http://localhost:8000/myItems?email=${email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then((res)=>{
                setMyItems(res.data)
            })
    },[email])

    //delete an item
    const deleteItem=async(id)=>{
        console.log(id)
        const result = await confirm("Do you want to delete it?",options);
        if(result){
           //setModalIsOpen(false)
           axios.delete(`http://localhost:8000/deleteProduct/${id}`)
           .then(res=>{
               if(res.data.deletedCount===1){
                   const restItems=myItems?.filter(myitem=>myitem._id!==id)
                   setMyItems(restItems)
               }
           }).catch((err)=>{
               console.log(err)
           })
        }


    }
    return (
        <div className="w-5/6 mx-auto">
            <Helmet>
                <title>MyItems</title>
            </Helmet>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Image
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Name
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Specification
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Price
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    myItems?.map(myItem=>(
                                    <tr key={myItem._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-wrap text-sm font-medium text-gray-900"><img src={process.env.PUBLIC_URL+`/images/${myItem?.img}`} alt="" className='h-[50px] w-[50px]' /></td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {myItem?.name}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {myItem?.description}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {myItem?.price}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap text-center">
                                    <button className=' bg-red-600 text-white px-2 py-1 rounded ' onClick={()=>deleteItem(myItem._id)}><FontAwesomeIcon icon={faTrash}/></button>
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

export default MyItems;