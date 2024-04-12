import axios from "axios"
const request = axios.create({
    baseURL: 'https://v2.eleadmin.com/api',
})


export default request