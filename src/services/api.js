import axios from 'axios';

class ApiService {
  GET = (url, params) => {
    return axios.get(url, {params});
  }
}

export default new ApiService();
