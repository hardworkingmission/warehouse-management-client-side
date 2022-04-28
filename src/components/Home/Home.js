import React from 'react';
import CustomCarousel from '../CustomCarousel/CustomCarousel';

const Home = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className="carousel">
                <CustomCarousel/>
            </div>
        </div>
    );
};

export default Home;