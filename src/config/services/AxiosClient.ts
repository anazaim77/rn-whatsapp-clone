import { Config } from "@/constants";
import axios, { InternalAxiosRequestConfig } from "axios";
import { showMessage } from "react-native-flash-message";

interface InterceptorRequestAxiosRequestConfig
  extends InternalAxiosRequestConfig {}

const axiosClient = axios.create({
  baseURL: Config.API_URL,
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  async (config: InterceptorRequestAxiosRequestConfig) => {
    // config.headers.Authorization = await StorageUtils.getString("AUTH_TOKEN");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    // console.log("[Axios] response.success", response);
    return response;
  },
  (error) => {
    // console.log("[Axios] response.error", error);
    if (error.response.status === 401) {
      // unauthorized
    } else if (error.response.status === 500) {
      // internal server error
      showMessage({
        message: "[500] Internal Server Error",
        type: "danger",
      });
    } else {
      // response error
      let message = error.response.data?.message;
      if (typeof message !== "string") {
        message = JSON.stringify(message);
      }
      console.log({ err: error.response.config.url });

      showMessage({
        message: message,
        type: "danger",
        duration: 3000,
      });
    }

    return Promise.reject(error.response.data);
  }
);

export default axiosClient;
