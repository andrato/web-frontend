import React from 'react';
import { useNavigate } from "react-router-dom";
import Image from "../assets/catfood.jpg";
import ProductService from '../services/ProductService';
import CartService from '../services/CartService';

export default function ProductItemComponent({id, image, name, price}) {

    const [product, setProduct] = React.useState([]);
    const [showButton, setShowButton] = React.useState(true);
    const username = localStorage.getItem("username");
    const navigate = useNavigate();
    image = Image;
  
    const handleRoute = () => { 
        navigate(`/products/${id}`);
    }


    // isDietBought();
    async function handleBuy() { 
        if(username && id) {
            const obj = {
                productId: id,
                email: username
            }
            try {
                const { data } = await CartService.addToCart(obj);
                alert("Item successfully added")
            }   
            catch(error) {
                console.log(error);
                alert("Error when adding to cart: " + error);
            }
        }
        else {
            navigate("/login");
        }
    }

    // isDietBought();
    return (
        <div className="menuItem">
            <div onClick={handleRoute}>
                <div style={{ backgroundImage: `url(${image})` }}>
                </div>
                <h3 style={{ paddingLeft: 17 + 'px'}}> {name} </h3>
            </div>
            <div className="item-end">
                <div id="price">{price}LEI</div>
                {showButton &&
                        <div id="buton"><button className="btn btn-primary" onClick={handleBuy}>Buy</button></div>
                }
            </div>
        </div>
    )
}