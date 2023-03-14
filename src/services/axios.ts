import axios from 'axios'

const api = axios.create({
  baseURL: 'https://45.67.231.4:5003',
})

export default api
