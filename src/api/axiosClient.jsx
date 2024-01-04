"use client"
import axios from "axios";
import { baseURL } from "./baseURL";



const AxiosClient = axios.create({
    baseURL: `${baseURL}api/`,
    headers: {
      'X-Request-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
  })

  export default AxiosClient