import axios from 'axios';

class ProductService {
    getProducts() {
        return axios.get(`http://localhost:8080/products/`);
    }

    getProductsByCategory(id) {
        // console.log("Sunt aici: " + `http://localhost:8080/products/category?id=${id}`);
        return axios.get(`http://localhost:8080/products/category?id=${id}`);
    }
    getProductsByAnimal(id) {
        // console.log("Sunt aici: " + `http://localhost:8080/products/animal?id=${id}`);
        return axios.get(`http://localhost:8080/products/animal?id=${id}`);
    }
 
    getProduct(id) {
        return axios.get(`http://localhost:8080/products?id=${id}`);
    }
}

// export object of this class
export default new ProductService();