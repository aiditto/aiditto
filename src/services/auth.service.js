/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { API, Axios } from "api";
export const SESSION_TOKEN_KEY = "session-token";
export const SESSION_TOKEN_EXPIRATION_DATE_KEY = "session-expiration-date";
const authenticationService = {
  signup: data => {
    Axios.post(API.auth.signup, data)
      .then(_response => {
        window.location.href = "/login";
      })
      .catch(error => {
        console.log(error);
      });
  },
  login: (email, password, callback) => {
    Axios.post(API.auth.login, {
      email: email,
      password: password
    })
      .then(response => {
        const expirationDate = new Date(response.data.message.expires);
        sessionStorage.setItem(SESSION_TOKEN_KEY, response.data.message.token);
        sessionStorage.setItem(SESSION_TOKEN_EXPIRATION_DATE_KEY, expirationDate);
        callback(response);
      })
      .catch(error => {
        callback(error);
      });
  },
  hasSessionToken: () => {
    return sessionStorage.getItem(SESSION_TOKEN_KEY);
  },
  isAuthenticated: () => {
    const token = sessionStorage.getItem(SESSION_TOKEN_KEY);
    return (
      token && new Date().getTime() <= new Date(sessionStorage.getItem(SESSION_TOKEN_EXPIRATION_DATE_KEY)).getTime()
    );
  },
  removeToken: () => {
    sessionStorage.removeItem(SESSION_TOKEN_KEY);
  },
  logout: () => {
    sessionStorage.removeItem(SESSION_TOKEN_KEY);
    sessionStorage.removeItem(SESSION_TOKEN_EXPIRATION_DATE_KEY);
    window.location.href = "/login";
  }
};

export default authenticationService;
