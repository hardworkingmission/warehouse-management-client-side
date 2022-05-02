import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts/useProducts';
import CustomSpinner from '../CustomSpinner/CustomSpinner';
import Product from '../Product/Product'

const Products = () => {
    const [products,setProducts,loading]=useProducts()
    const navigate=useNavigate()
    if(!products){
        return <CustomSpinner/>
    }

    const shuffledProducts = products?.sort(() => 0.5 - Math.random());
    let selectedProducts=shuffledProducts.slice(0,6)
    //console.log(products)
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-3'>Laptops</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                   selectedProducts?.map(product=><Product key={product._id} product={product}/>)
                }
            </div>
            <div className='text-center'>
                <button className='text-xl font-bold my-3 bg-white p-2 rounded' onClick={()=>navigate('/manageitems')}>Manage Inventories</button>

            </div>
           
        </div>
    );
};

export default Products;