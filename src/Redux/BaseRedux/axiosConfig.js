import axios from 'axios'

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const mainAxios = axios.create({
  baseURL: process.env.REACT_APP_API_AKADEMIK,
})

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_KRS,
})

export {mainAxios, customAxios}
