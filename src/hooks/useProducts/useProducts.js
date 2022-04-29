import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/products')
           .then(res=>{
               setProducts(res.data)
           })

    },[])
    return [products,setProducts]
};

export default useProducts;