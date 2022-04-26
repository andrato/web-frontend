import axios from 'axios';

class AnimalService {
    getAnimals() {
        return axios.get(`http://localhost:8080/animals/`);
    }
}

// export object of this class
export default new AnimalService();