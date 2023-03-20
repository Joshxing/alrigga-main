import axios from "axios";

window.axios = axios
axios.defaults.withCredentials = false
const hostname = 'https://alrigga-main.vercel.app/'
let backendUrl = `${hostname}api`
axios.defaults.baseURL = backendUrl
