import React from 'react'
import { useParams } from 'react-router-dom';
import ProductService from '../services/ProductService';
import ProductItemComponent from './ProductItemComponent';

export default function ProductsByAnimalComponent(props) {

    const [products, setProducts] = React.useState([]);

    let { id } = useParams(); 

    React.useEffect(() => { 
        ProductService.getProductsByAnimal(id).then((response) => {
            setProducts(response.data);
        })
    }, [id]);

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