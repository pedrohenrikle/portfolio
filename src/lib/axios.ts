import axios from 'axios'

export const api = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  },
  baseURL: '/api',
})
