import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { confirm } from "react-confirm-box";
import { useNavigate } from 'react-router-dom';

const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    },
  }

const AllItems = () => {
    const navigate=useNavigate()
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/products')
             .then(res=>{
                setProducts(res.data)
             })

    },[])

    const deleteProduct=async(id)=>{
        const result = await confirm("Do you want to delete it?",options);
         if(result){
            //setModalIsOpen(false)
            axios.delete(`http://localhost:8000/deleteProduct/${id}`)
            .then(res=>{
                if(res.data.deletedCount===1){
                    const restProducts=products?.filter(product=>product._id!==id)
                    setProducts(restProducts)
                }
            }).catch((err)=>{
                console.log(err)
            })
         }
       
    }
    const editProduct=(id)=>{
        navigate(`/inventory/${id}`)
    }

    return (
        <div className="w-full">
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
                                    products?.map(product=>(
                                    <tr key={product._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-wrap text-sm font-medium text-gray-900"><img src={process.env.PUBLIC_URL+`/images/${product?.img}`} alt="" className='h-[50px] w-[50px]' /></td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {product?.name}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {product?.description}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                    {product?.price}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap justify-center flex items-center">
                                    <button className=' bg-green-400 text-white px-2 py-1 rounded mr-1' onClick={()=>editProduct(product._id)}><FontAwesomeIcon icon={faEdit}/></button>
                                    <button className=' bg-red-600 text-white px-2 py-1 rounded ' onClick={()=>deleteProduct(product._id)}><FontAwesomeIcon icon={faTrash}/></button>
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

export default AllItems;