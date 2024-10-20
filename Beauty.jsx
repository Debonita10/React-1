import { useNavigate } from "react-router-dom";
import './Beauty.css';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Beauty(){

let nav = useNavigate()

let [product,setProduct]=useState([])
   
       const API = "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories";

       useEffect(() => {
        const getProducts = async (url) => {
          try {
            const res = await axios.post(url);
            console.log(res.data.data ,"data");
            setProduct(res.data.data[3].children);
            console.log(res.data.data[3])
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        getProducts(API);

       }, []);  

let gotoHome=()=>{
    nav("/")
}
let gotoProducts=()=>{
    nav("/category")
}
let gotoBeauty=()=>{
    nav("/beauty")
}

    return(
<>
<div className="seg">
    <button className="Home" onClick={gotoHome}>Home\</button>
    <button className="Products" onClick={gotoProducts}>Products\</button>
    <button className="Beauty" onClick={gotoBeauty}>Beauty and Personal care</button>
</div>
<div className="beauty-container">
            <h2>BEAUTY & PERSONAL CARE CATEGORY</h2>
            <div className="beauty-items">
            {product.map((value)=>{
          return(
                <div className="beauty-item">
                   <img src={value.image} alt={value.name} />
          <p>{value.name}</p>
        </div>
          )
        })}
                </div>
            </div>
        




</>
    );
}