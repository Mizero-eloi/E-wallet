import http from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = config.tokenKey;

export function login(loginState) {
  const LOGIN_END_POINT = config.apiEndPoint + "/login";
  return http.post(LOGIN_END_POINT, loginState);
}

export function getCurrentUser() {
  try {
    const friskyToken = localStorage.getItem("frisky-token");
    return jwtDecode(friskyToken);
  } catch (ex) {
    console.log(ex);
  }
}

export function getjwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export default {
  login,
  getjwt,
  getCurrentUser,
};
