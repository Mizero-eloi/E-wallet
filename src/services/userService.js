import http from "./httpService";
import config from "../config.json";

export function register(signupState) {
  return http.post(config.signUpEndPoint, signupState);
}
