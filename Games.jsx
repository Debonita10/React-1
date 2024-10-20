import { useNavigate } from "react-router-dom";
import './Games.css';

export default function Games(){

    let nav = useNavigate();

    let gotoHome=()=>{
        nav("/")
    }

    let gotoProducts=()=>{
        nav("/category")
    }
    let gotoGames=()=>{
        nav("/games")
    }
    return(
<>
<div></div>
<div className="segm">
    <button className="home"onClick={gotoHome}>Home\</button>
    <button className="products"onClick={gotoProducts}>Products\</button>
    <button className="games"onClick={gotoGames}>Games</button>
    </div>

    <div className="game-container">
        <h1>TOY & GAMES CATEGORY</h1>
     
     <div className="game-items">
       
          <div className="game-item">
            <img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/Action_Figures.jpeg" alt="Action figures " />
          <p>Action figures</p>
        </div>
          <div className="game-item"> 
            <img src="https://alphasilver.productsalphawizz.com/uploads/media/2024/Dolls_Accessories.jpeg" alt="Dolls & Accessories" />
          <p>Dolls & Accessories</p>

          </div>
        </div>
      
        </div>





</>
    );
}