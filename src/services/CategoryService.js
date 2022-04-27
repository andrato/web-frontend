import axios from 'axios';
import { headers  } from './Header';

class CategoryService {
    getCategories() {
        return axios.get(`http://localhost:8080/categories/`);
    }
}

// export object of this class
export default new CategoryService();