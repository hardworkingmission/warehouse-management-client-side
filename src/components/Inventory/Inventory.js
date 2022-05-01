import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupee } from '@fortawesome/free-solid-svg-icons'

const Inventory = () => {
    const {productId}=useParams()
    const [product,setProduct]=useState({})
    const [agree,setAgree]=useState(false)
    
    //get product by id
    useEffect(()=>{
        axios.get(`http://localhost:8000/product/${productId}`)
              .then((res)=>{
                  console.log(res.data)
                  setProduct(res.data)
              })
             
    },[productId])

    //delevery product
    const handleDelivery=()=>{
        product.quantity=parseInt(product.quantity)>0?parseInt(product.quantity)-1:parseInt(product.quantity)
        setProduct({...product})
        axios.put(`http://localhost:8000/updateQuantity/${product._id}`,product)
             .then((res)=>{
                 if(res.data){
                     console.log(res.data)
                 }
             })
    }
    //reStock product
    const [reStock,setReStock]=useState(0)
    const hangleReStock=(e)=>{
        e.preventDefault()
        product.quantity=parseInt(product.quantity)+parseInt(reStock)
        setProduct({...product})
        axios.put(`http://localhost:8000/updateQuantity/${product._id}`,product)
             .then((res)=>{
                 if(res.data){
                     setReStock(0)
                 }
             })

    }

    return (
        <div className='w-5/6 mx-auto flex justify-center my-3 relative'>
            
            <div className='lg:w-1/3 md:w-2/4 w-full border border-2 p-3 bg-white rounded-lg '>
            <Link to={'/manageitems'} className='adsolute text-blue-600 underline w-[200px]'>Manage Inventories</Link>
                <div className="product-img">
                    <img src={process.env.PUBLIC_URL+`/images/${product.img}`} alt=""  className='h-[300px]'/>
                </div>
                <div className="product-info text-center p-1">
                    <h3 className='font-bold text-lg'>{product?.name}</h3>
                    <p><span className='font-bold mr-1'>Specification:</span>  {product?.description}</p>
                    <p><span className='font-bold'>Price:</span> <FontAwesomeIcon icon={faRupee}/> {product?.price}</p>
                    <p><span className='font-bold'>Quantity:</span> {product?.quantity}</p>
                    <p><span className='font-bold'>Supplier:</span> {product?.supplier}</p>
                </div>
                <div className='text-center my-3'>
                    { 
                       agree?(
                           <form action="" onSubmit={hangleReStock}>
                               <input type="text" placeholder='Restock Quantity' className='border-b-2 outline-none w-1/2 px-3 rounded my-2'value={reStock} onChange={(e)=>setReStock(e.target.value)} /><br />
                               <input type="submit" value="ReStock" className='w-1/2 bg-gray-300 p-2 rounded-lg font-bold cursor-pointer'/>
                           </form>
                            ):(
                                <button className='w-1/2 bg-gray-300 p-2 rounded-lg font-bold' onClick={handleDelivery}>Deliveried</button>
                            )
                    }
                    
                </div>
                <div className='text-center'>
                    <button className='w-1/2 bg-gray-300 p-2 rounded-lg font-bold' onClick={()=>setAgree(!agree)}>{agree?"Deliveried":"ReStock"}</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;