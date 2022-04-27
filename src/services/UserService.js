import axios from 'axios';
import { headers  } from './Header';

class UserService {
    getUsers() {
        return axios.get(`http://localhost:8080/users/`);
    }

    // login(obj) {
    //     return axios.post(`http://localhost:8080/auth/login`, obj);
    // }

    // update(id, obj){
    //     console.log(obj);
    //     return axios.put(`http://localhost:8080/users/${id}`, obj);
    // }

    getUserById(id){
        return axios.get(`http://localhost:8080/users/${id}`, {headers: headers});
    }

    deleteUser(id) {
        return axios.delete(`http://localhost:8080/users/${id}`);
    }

    getUserByUsername(username) {
        return axios.delete(`http://localhost:8080/users/${username}`);
    }

    register(user) {
        console.log("suntem pe register");
        return axios.post(`http://localhost:8080/auth/signup`, user);
    }

    login(user){
        return axios.post(`http://localhost:8080/auth/signin`, user);
    }

    logout(){
        localStorage.removeItem("user_id");
        localStorage.removeItem("is_admin");
        localStorage.removeItem("username");
        localStorage.removeItem("token");
    }
}

// export object of this class
export default new UserService();