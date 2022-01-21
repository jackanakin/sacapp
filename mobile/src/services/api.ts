// @ts-nocheck
import axios, { AxiosRequestConfig } from "axios";
import { serverAddress } from "./serverAddress";

const api = axios.create({
  //baseURL: "https://kuhn.net.br:3333",
  //baseURL: "http://localhost:3334",
  baseURL: serverAddress,
  timeout: 5000
});

export default api;
