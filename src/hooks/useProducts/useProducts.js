import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get('https://secure-eyrie-16583.herokuapp.com/products')
           .then(res=>{
               setProducts(res.data)
               setLoading(false)
           })

    },[])
    return [products,setProducts,loading]
};

export default useProducts;