import React from 'react'
import ProductService from '../services/ProductService';
import ProductItemComponent from './ProductItemComponent';
import Image from "../assets/plus.jpg";
import "../styles/ProductList.css";

function ProductsComponent(props) {

    const [products, setProducts] = React.useState([]);
    const is_admin = localStorage.getItem("is_admin");
    const image = Image;

    React.useEffect(() => { 
        ProductService.getProducts().then((response) => {
            // console.log(response.data);
            setProducts(response.data)
        })
    }, []);

    // display diet list
    return (
        <div className="menu">
            <div className="menuList">
                {/* { is_admin === "true" &&
                    <div className="menuItem">
                        <div className="imageImage" onClick={goToNewElem}>
                        </div>
                    </div>
                } */}
                {
                    products.map(
                        (product, key) => {
                            return <ProductItemComponent id={product.id} image={product.image} name={product.name} price={product.price} key={key}/>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ProductsComponent;