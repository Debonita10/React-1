import { useNavigate } from "react-router-dom";
import './Books.css';
export default function Books(){

let nav = useNavigate()

let gotoHome=()=>{
    nav("/")
}
let gotoProducts=()=>{
    nav("/category")
}
let gotoBooks=()=>{
    nav("/books")
}

    return(
<>
<div className="seg">
    <button className="Home" onClick={gotoHome}>Home\</button>
    <button className="Products" onClick={gotoProducts}>Products\</button>
    <button className="Beauty" onClick={gotoBooks}>Books</button>
</div>
<div className="books-container">
            <h2>BOOKS CATEGORY</h2>
            <div className="books-items">
                <div className="books-item">
                    <img
                        src="https://alphasilver.productsalphawizz.com/uploads/media/2024/Fiction.jpeg"
                        alt="Fiction"
                        className="books-image"
                    />
                    <p>Fiction</p>
                </div>
            </div>
        </div>




</>
    );
}