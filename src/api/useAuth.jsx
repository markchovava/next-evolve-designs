import axios from 'axios'
import { baseURL } from './baseURL'



export default function useAuth() {

    const csrf = () => axios.get(`${baseURL}/sanctum/csrf-cookie`)

  return {
    csrf
  }
  
}
