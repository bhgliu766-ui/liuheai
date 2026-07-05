import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://your-api.com',
  timeout: 10000
})