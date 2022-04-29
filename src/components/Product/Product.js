import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupee } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const Product = ({product}) => {
    const {name,img,description,price,quantity,_id}=product
    const navigate=useNavigate()
    return (
        <div className='col border border-2 bg-white rounded-lg'>
            <div className="product-img flex justify-center">
                <img src={process.env.PUBLIC_URL+`/images/${img}`} alt="" className='rounded-lg'/>
            </div>
            <div className="product-info text-center p-1">
                <h3 className='font-bold text-lg'>{name}</h3>
                <p><span className='font-bold mr-1'>Specification:</span>  {description}</p>
                <p><span className='font-bold'>Price:</span> <FontAwesomeIcon icon={faRupee}/> {price}</p>
                <p><span className='font-bold'>Quantity:</span> {quantity}</p>
            </div>
             <div className='text-center'>
                <button className='w-1/2 bg-gray-300 p-2 rounded-lg font-bold' onClick={()=>navigate(`/inventory/${_id}`)}>Update</button>
             </div>
        </div>
    );
};

export default Product;