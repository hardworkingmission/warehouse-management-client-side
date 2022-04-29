import React from 'react';
import useProducts from '../../hooks/useProducts/useProducts';
import Product from '../Product/Product'

const Products = () => {
    const [products,setProducts]=useProducts()

    const shuffledProducts = products.sort(() => 0.5 - Math.random());
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
        </div>
    );
};

export default Products;