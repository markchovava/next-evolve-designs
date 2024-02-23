"use client"
import { baseURL } from "@/api/baseURL";
import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: `${baseURL}`,
    headers: {
        'X-Request-With': 'XMLHttpRequest',
    },

});


const fetcherWeb  = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
      }  catch (error) {
        console.error(`Error: ${error}`)
      }   
  };

export default fetcherWeb;









