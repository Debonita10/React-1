import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css'; 

const Slider = () => {
    return (
        <div className="slider-container">
            <Carousel
                showArrows={true} 
                showThumbs={false} 
                infiniteLoop={true} 
                autoPlay={false} 
                interval={3000}
                
            >
                <div>
                    <img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/7mdfskoasdhgoihgio047805.png"  />
                </div>
                <div>
                    <img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/bannar.jpg" />
                </div>
                
                <div>
                    <img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/847497sdgiuashdgihasio8.jpg"  />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;



