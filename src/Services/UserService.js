import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'http://localhost:5000'

const instance = axios.create({
  baseURL: API_URL,
  headers: authHeader()
});

class UserService {

  async getCredits() {
    return await instance.get(API_URL + '/user/credits');
  }

}

export default new UserService();