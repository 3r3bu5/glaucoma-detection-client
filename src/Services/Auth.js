import axios from "axios";

const API_URL = 'http://localhost:5000'

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

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();