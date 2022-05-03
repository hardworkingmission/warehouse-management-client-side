import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts/useProducts';
import Product from '../Product/Product'

const Products = () => {
    const [products,setProducts,loading]=useProducts()
    const shuffledProducts = products?.sort(() => 0.5 - Math.random());
    const selectedProducts=shuffledProducts.slice(0,6)
   
    const navigate=useNavigate()
    if(loading){
        return (<div className="flex justify-center items-center my-3">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-600" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>)
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-3'>Laptops</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                   selectedProducts.map(product=><Product key={product._id} product={product}/>)
                }
            </div>
            <div className='text-center'>
                <button className='text-xl font-bold my-3 bg-white p-2 rounded' onClick={()=>navigate('/manageitems')}>Manage Inventories</button>
            </div> 
        </div>
    );
};

export default Products;