import React,{useState} from 'react';
import { useEffect } from 'react';
// import "../cart.css";

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    console.log(cart, "hello")

    // const handlePrice = ()=>{
    //     let ans = 0;
    //     cart.map((value)=>(
    //         ans += value.amount * value.price
    //     ))
    //     setPrice(ans);
    // }

    const handleRemove = (id) =>{
        const arr = cart.filter((value)=>value.id !== id);
        setCart(arr);
        // handlePrice();
    }

    // useEffect(()=>{
    //     handlePrice();
    // })

  return (
    <article>
        {
            cart?.map((value)=>(
                <div className="cart_box" key={value.id}>
                    <div className="cart_img">
                        <img src={value.image} />
                        <p>{value.category_name}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(value, +1)}> + </button>
                        <button>{value.quantity_step_size}</button>
                        <button onClick={()=>handleChange(value, -1)}> - </button>
                    </div>
                    <div>
                        <span>{value.min_max_price.min_price}</span>
                        <button onClick={()=>handleRemove(value.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
    </article>
  )
}

export default Cart