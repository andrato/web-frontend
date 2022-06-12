import axios from 'axios';
import { headers  } from './Header';

class CartService {
    addToCart(request) {
        console.log("sunt aici");
        console.log(request);
        return axios.post('http://localhost:8080/orders/products', request, {headers: headers});
    }

    getCurrentBilling() {
        const id = localStorage.getItem("user_id");
        return axios.get(`http://localhost:8080/orders/user?id=${id}`, {headers: headers});
    }

    getAllUserBillings(id) {
        return axios.get(`http://localhost:8080/orders/user/${id}`, {headers: headers});
    }

    getBillings(){

    }

    purchaseProducts(id){
        console.log("aici " + id);
        return axios.get(`http://localhost:8080/orders/${id}`, {headers: headers});
    }
}

// export object of this class
export default new CartService();