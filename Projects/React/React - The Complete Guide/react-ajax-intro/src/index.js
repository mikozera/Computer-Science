import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

const requestInterceptor = axios.interceptors.request.use(
  (requestConfig) => {
    console.log(requestConfig);
    return requestConfig;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const responseInterceptor = axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
