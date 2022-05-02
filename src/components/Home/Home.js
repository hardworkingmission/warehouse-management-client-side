import React from 'react';
import Helmet from 'react-helmet';
import Chart from '../Chart/Chart';
import CustomCarousel from '../CustomCarousel/CustomCarousel';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="carousel">
                <CustomCarousel/>
            </div>
            <div className="products my-3 bg-gray-300 p-2">
                <Products/>
            </div>
            <div className="chary my-3">
                <Chart/>
            </div>
            <div className='my-3'>
                <h1>Extre section incomplete</h1>

            </div>
        </div>
    );
};

export default Home;