import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {productId}=useParams()
    return (
        <div>
            <p>ProductId: {productId}</p>
        </div>
    );
};

export default Inventory;