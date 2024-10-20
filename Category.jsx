import React, { useEffect, useState } from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Category(){
const nav= useNavigate();
let [product,setProduct]=useState([])



    const gotoHome=()=>{
        nav("/")
    }

    const API = "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories";

  
    useEffect(() => {
      const getProducts = async (url) => {
        try {
          const res = await axios.post(url);
          console.log(res.data.data ,"data");
          setProduct(res.data.data);
          
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      getProducts(API);
    }, []);  
    return (
     <>
     <div className='bkhme'>
<button onClick={gotoHome}>Home</button>
     </div>
        
            <div className="category">
      <h2>CATEGORIES</h2>
      <div className="category-container">
        {product.map((value)=>{
          return(
            <div className="category">
          <img src={value.image} alt={value.name} />
          <p>{value.name}</p>
        </div>
          )
        })}
        
    </div>
</div>
</>    
    );
};


