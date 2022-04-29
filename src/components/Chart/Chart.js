import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useProducts from '../../hooks/useProducts/useProducts';

const Chart = () => {
    const [products,setProducts]=useProducts()
    const chartData=products.map(product=>({
        name:product.name.split(' ')[0],
        quantity:product.quantity
    }))
    //console.log(chartData)
    return (
        <div className="w-full mx-auto">
            <h1 className='text-center text-4xl font-bold my-3'>Overview Of InStock Products</h1>
            <ResponsiveContainer width="95%" height={300}>
                <BarChart width={1000} height={300} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="quantity" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;