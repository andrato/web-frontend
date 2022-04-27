import React from 'react'
import ProductService from '../services/ProductService';
import Image from "../assets/catfood.jpg";
import '../styles/ProductDetails.css';
import { useParams } from 'react-router-dom';

function ProductComponent(props) {

    // get id from url 
    let { id } = useParams(); 

    const [product, setProduct] = React.useState('');
    const [productInfo, setProductInfo] = React.useState('');
    const [showButton, setShowButton] = React.useState(true);

    React.useEffect(() => { 
        ProductService.getProduct(id).then((response) => {
            setProduct(response.data)
        })
    }, []);

    // React.useEffect(() => { 
    //     ProductService.getProductInfo(id).then((response) => {
    //         setProduct(response.data)
    //     })
    // }, []);

    function handleBuy(){
        console.log("aici");
    }

    return (
        <div className="menu">
            <div className="menuList">
                {
                    <div className="totul">
                        <div id="the-first">
                            <div className="doi">
                                    <h2>{product.name}</h2>
                                    {/* <pre>Goal: <span>{diet.price}</span></pre> */}
                                    <pre>Price: <span>{product.price} LEI</span></pre>
                                    <pre>Description: <span>...</span></pre>
                                    
                            
                                    {showButton &&<div id="div-btn" onClick={handleBuy}>
                                        <button>Buy</button>
                                    </div>}
                            </div>
                            <div className="unu"> 
                                <img src={Image} alt="Paris" width="450" />
                            </div>
                        </div>
                    </div>
                }   
            </div>
        </div>
    )
}

export default ProductComponent;