import React from 'react'
import ProductService from '../services/ProductService';
import ProductItemComponent from './ProductItemComponent';
import "../styles/ProductList.css";

function ProductsComponent(props) {

    const [products, setProducts] = React.useState([]);

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
                {
                    products.map(
                        (product, key) => {
                            return <ProductItemComponent id={product.id} image={product.image} name={product.name} price={product.price}/>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ProductsComponent;