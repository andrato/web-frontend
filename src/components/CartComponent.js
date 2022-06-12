import React from 'react';
import { useNavigate } from "react-router-dom";
import CartService from '../services/CartService';
import '../styles/Cart.css';

function CartComponent () {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    const [orderId, setOrderId] = React.useState('');
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => { 
        if(!username) {
            navigate('/login');
        }

        CartService.getCurrentBilling().then((response) => {
            console.log("succes")
            setOrderId(response.data.id);
            setProducts(response.data.products);
        })
        .catch((err) => {console.log("Error on getBill " + err)})

    }, [navigate, username]);

    function handleBuy() {
        CartService.purchaseProducts(Number(orderId)).then((response) => {
            navigate("/");
        })
        .catch((err) => {console.log(err); alert("Error on handleBuy " + err)})
    }

    return (
        <div className="cartItems">
            {
                !orderId && <p className="noItems">
                    No items added!
                </p>
            }
            { orderId && 
                products.map(
                    (product, key) => {
                        return <div className="product"> 
                            <div>
                                <span className="bold">Name: </span>
                                <span>{product.name}</span>
                            </div>
                            <div>
                                <span className="bold">Price: </span>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    }
                )
            }
            <button className="cartButton" onClick={handleBuy}>BUY ITEMS FROM CART</button>

        </div>
    )
}

export default CartComponent;