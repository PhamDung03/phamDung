import axios  from "axios"; 
import { API_DOMAIN } from "../constants/schematics";

const signup =(data)=>{
    return axios.post(`${API_DOMAIN}/accounts` , data);
}

const login = (data)=>{
    return axios.post(`${API_DOMAIN}/accounts/auth`,data)
}

export {signup , login}