import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

class AuthService {
  login(email, password) {
    return axios
      .post( API_URL + "/user/login", {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstname, lastname ,email, password) {
    return axios.post(API_URL + "/user/signup", {
      fname: firstname,
      lname: lastname,
      email,
      password
    });
  }

  async resendToken(email) {
    return await axios.get(API_URL + `/user/verify/${email}`);
  }
  async verification(email, token) {
    return await axios.get(API_URL + `/user/verify/${email}/${token}`);
  }

  async getCurrentUser() {
    var response;
    var lsUser = JSON.parse(localStorage.getItem('user'));
    if (lsUser) {
      response =  await axios.post(API_URL + `/user/check`, { token: lsUser.token});
      if(response.data.success === true) {
        return lsUser
      } else {
        localStorage.clear();
        return false;
      }
    } 
    return false;
  }
}

export default new AuthService();