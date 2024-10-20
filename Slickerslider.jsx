import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slickerslider.css';

function Slickerslider () {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post('https://alphasilver.productsalphawizz.com/app/v1/api/get_categories')
      .then(res => {
        console.log(res.data);
        setData(res.data.data); 
      })
      .catch(err => console.log(err));
  }, []);

  
  if (!data.length) return <p>Loading...</p>; 

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    slidesToScroll: 7,
    slidesToShow: 7,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [ {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 7,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 7,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 7
      }
    }],
  
   
  };

  return (
    <>
    <div className="h2slick">
    <h2>Category</h2>
    </div>
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index} className="category-item">
          <img src={item.image || 'https://via.placeholder.com/100'} alt={item.name} className="category-image" />
          <p>{item.name}</p>
        </div>
      ))}
    </Slider>
    </>
  );
}

export default Slickerslider;