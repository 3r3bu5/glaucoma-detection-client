import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = process.env.REACT_APP_API_URL

class UserService {

  async getCredits() {
    return await axios.get(API_URL + '/user/credits', {headers: authHeader()});
  }
  async getPatient() {
    return await axios.get(API_URL + '/patient', {headers: authHeader()});
  }

  async getPatientHistory(id) {
    return await axios.get(API_URL + '/patient/'+ id + '/history', { headers: authHeader() });
  }
  async createNewPatient(data) {
    return await axios.post(API_URL + '/patient/new' , data , { headers: authHeader() });
  }
  async uploadImage(formData) {
    return await axios.post( API_URL + '/scan/new', formData,  { headers: authHeader() }) 
  }
  async updateCredits(credits) {
    return await axios.post(API_URL + '/user/update_credits', {credits}, { headers: authHeader() });
  }

  async createPaymentIntent(NumberOfCredits) {
    return await axios.post(API_URL + "/checkout/payment_intents", { NumberOfCredits }, {headers: authHeader()} );
  }
}

export default new UserService();