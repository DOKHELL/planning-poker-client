import axios from 'axios'

const api = axios.create({
  baseURL: 'http://194.34.232.79:5003',
})

export default api
