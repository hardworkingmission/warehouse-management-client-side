import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const CustomCarousel = () => {
    const slides=[
        {id:1,img:'laptop1.jpg',title:'MackBook'},
        {id:2,img:'laptop2.jpg',title:'Zbook'},
        {id:3,img:'laptop3.jpg',title:'ZenBook'},
        {id:4,img:'laptop4.jpg',title:'MSI Summit'},
    ]
    return (
        <Carousel autoPlay={true} infiniteLoop interval={'4000'} verticalSwipe={'standard'}>
            {
                slides.map(slide=>(
                    <div key={slide.id}>
                        <img src={process.env.PUBLIC_URL+`/banners/${slide.img}`} alt='' />
                        <p className="legend">{slide.title}</p>
                    </div>
                ))
            }         
        </Carousel>
    );
};

export default CustomCarousel;