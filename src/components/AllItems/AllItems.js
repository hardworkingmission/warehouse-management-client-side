import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import CustomConfirm from '../CustomConfirm/CustomConfirm';
import CustomSpinner from '../CustomSpinner/CustomSpinner'
import { useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';



const AllItems = () => {
    const navigate=useNavigate()
    const [products,setProducts]=useState(null)
    const [pages,setPages]=useState(0)
    const [page,setPage]=useState(0)
    const [size,setSize]=useState(10)
    useEffect(()=>{
        axios.get(`https://secure-eyrie-16583.herokuapp.com/products?page=${page}&size=${size}`)
             .then(res=>{
                setProducts(res.data)
             })
        

    },[page,size])
    useEffect(()=>{
        axios.get('https://secure-eyrie-16583.herokuapp.com/itemCount')
        .then(res=>{
            const count=parseInt(res.data.itemCount)
            setPages(Math.ceil(count/10))
        })

    },[])

    //custom confirm
    const [modalIsOpen,setModalIsOpen]=useState(false)
    const [productId,setProductId]=useState('')
    const closeModal=()=>{
        console.log('close')
        setModalIsOpen(false)
    }
    const handleConfirm=(confirm)=>{

        //setModalIsOpen(false)
        if(confirm){
            setModalIsOpen(false)
            axios.delete(`https://secure-eyrie-16583.herokuapp.com/deleteProduct/${productId}`)
            .then(res=>{
                if(res.data.deletedCount===1){
                    const restProducts=products?.filter(product=>product._id!==productId)
                    setProducts(restProducts)
                }
            }).catch((err)=>{
                console.log(err)
            })
         }
    }

    const deleteProduct=(id)=>{
        setProductId(id)
        setModalIsOpen(true)
    }
    const editProduct=(id)=>{
        navigate(`/inventory/${id}`)
    }
    //console.log(productId)
    return (
        <div className="w-full">
            <Helmet>
                <title>AllItems</title>
            </Helmet>
            <CustomConfirm modalIsOpen={modalIsOpen} closeModal={closeModal} handleConfirm={handleConfirm} />
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
                                    !products?<CustomSpinner/>:products?.map(product=>(
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
            <div className='text-center'>
                {
                    [...Array(pages).keys()].map(num=>(
                        <button className={`border border-2 mr-2 py-1 px-2 ${num===page?'bg-gray-300':''}`} onClick={()=>setPage(num)}>{num+1}</button>
                    ))

                }
                {
                    <select name="" id="" className='border border-2 py-1' onClick={(e)=>setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option selected value="10">10</option>
                    </select>
                }
            </div>
        </div>
    );
};

export default AllItems;