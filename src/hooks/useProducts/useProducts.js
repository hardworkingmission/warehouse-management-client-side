import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products,setProducts]=useState(null)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get('http://localhost:8000/products')
           .then(res=>{
               setProducts(res.data)
               setLoading(false)
           })

    },[])
    return [products,setProducts,loading]
};

export default useProducts;