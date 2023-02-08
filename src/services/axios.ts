import axios from 'axios'

const api = axios.create({
  baseURL: 'https://vmi854506.contaboserver.net:5003',
})

export default api
