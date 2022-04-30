import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate()
    const [state,setState]=useState({name:'',description:'',price:'',supplier:'',quantity:'',email:user?.email})
    const [imgFile,setImgFile]=useState()
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})

    }
    const handleFileChange=(e)=>{
        setImgFile(e.target.files[0])

    }
    const createNewItem=(e)=>{
        e.preventDefault()
        const newItem={
            img:imgFile.name,
            ...state
        }
        axios.post('http://localhost:8000/addProduct',newItem)
           .then((res)=>{
               if(res.data.insertedId){
                navigate('/manageitems/allitems')
               }
           })
        //console.log(newItem)
    }
    return (
        <div className='flex justify-center'>
            
            <form action="" className='lg:w-[50%] md:w-[70%] border border-2 p-2 rounded' onSubmit={createNewItem}>
               <h1 className='text-center text-2xl my-2 font-bold'>Please Add A Product</h1>
                <input type="text" className="p-2 mb-2 border-b-2 w-full outline-none rounded"name='name' placeholder='Product Name' required onChange={handleChange} value={state?.name}/><br />
                <input type="email" className="p-2 mb-2 border-b-2 w-full outline-none rounded" onChange={handleChange} value={user?.email} readOnly/><br />
                <input type="text" className="p-2 mb-2 border-b-2 w-full outline-none rounded"name="description"placeholder='Specification' required onChange={handleChange} value={state?.description}/><br />
                <input type="text" className="p-2 mb-2 border-b-2 w-full outline-none rounded"name="price" placeholder='Price' required onChange={handleChange} value={state?.price}/><br/>
                <input type="text" className="p-2 mb-2 border-b-2 w-full outline-none rounded"name='quantity' placeholder='Quantity' required onChange={handleChange} value={state?.quantity}/><br />
                <input type="text" className="p-2 mb-2 border-b-2 w-full outline-none rounded"name='supplier' placeholder='Supplier' required onChange={handleChange} value={state?.supplier}/><br />
                <input type="file" className="p-2 mb-2 border-b-2 w-full outline-none rounded"name="img" required onChange={handleFileChange}/><br />
                <input type="submit" className='bg-gray-300 w-full p-2 rounded' value="Add" />
            </form>
            
        </div>
    );
};

export default AddItem;