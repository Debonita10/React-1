import React, { useEffect, useState } from "react";
import axios from "axios";
import'./Newproductgro.css';
import Cart from "./Cart";

export default function Newproductgro(){
    


let [product,setProduct]=useState([])
   
const API = "https://alphasilver.productsalphawizz.com/app/v1/api/get_sections";

  
useEffect(() => {
  const getProducts = async (url) => {
    try {
      const res = await axios.post(url);
      const Products = res.data.data.product_details;

      setProduct( res.data.data[0].product_details);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  getProducts(API);
}, []); 


const handleClick = (value)=>{
  console.log(value,"handleClick")

}

return(


        <div className="catapi">
          
   
  
  
      {product.map((value)=>{
          return(
            <div class="product-card">
                                    <div class="badge">{value.min_max_price.discount_in_percentage}%Off</div>
                                    <div class="product-tumb">
                                        <img src={value.image} alt="" />
                                    </div>
                                    <div className='product-detail'>
                                        <div className='product-name'>{value.name}</div>
                                        <div className='product-price'>&#8377;{value.min_max_price.min_price}</div>
                                        <div className='product-btn'>
                                            <button  onClick={()=>handleClick(value)}>
                                              Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
          )
        })}
   
      </div>

)
}