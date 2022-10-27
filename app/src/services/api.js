import axios from 'axios'

const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ing2ejZ0SnRDM1NxUXFadlhZNElVcCJ9.eyJpc3MiOiJodHRwczovL3JlaW5hLmpwLmF1dGgwLmNvbS8iLCJzdWIiOiJqYzI0U2pxc3k1VVpOZlhlZFRqRnY3YVdHMTdRT3lTRkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hbmdlbC1iYWJ5LWRiL2FwaSIsImlhdCI6MTY2NjQyOTQyNiwiZXhwIjoxNjY2NTE1ODI2LCJhenAiOiJqYzI0U2pxc3k1VVpOZlhlZFRqRnY3YVdHMTdRT3lTRiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.pVmsw2NedDiCH1UevvVt27MhdsCNriCjrAEQKLONZEwTgNTUWzu0AR7rpaGXXnt93a7B1Q0PMtasS_kv7O_foLblPEYbOM4rdSS2FGmpsbOWfvUnKyqgLOBETgKSqb26n0ZBONWtOuNoH-YvbICzhuolz34COHvDYSRJOZHSux4its4WpNwt_KjxBYC7INLWe7htHOAjou8aABVxJZt_c0AIZdpfCNZ660MQ3kbCcI5if-b73yyLT0_gezebuIj_vVd2iLl0w211UNd9RgbD1_w6ikGBsw4dgEjG5zpgoGwFt9CwSFpTqVSNxDQPZbLc4n57PLNkRhNX3oJxvWu6uQ';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8095/api',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  }
})

const JWT_TOKEN_LOCALSTORAGE_KEY = 'jwt_token'
const token = localStorage.getItem(JWT_TOKEN_LOCALSTORAGE_KEY);

axiosInstance.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export const authAPI = {
  async login (email, password) {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password
    })
    if (response.status == 200) {
      localStorage.setItem(JWT_TOKEN_LOCALSTORAGE_KEY, response.data.access_token)
      return true
    }
    return false
  },
  async me () {
    const _token = localStorage.getItem(JWT_TOKEN_LOCALSTORAGE_KEY)
    if (_token) {
      axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + _token
    }
    const response = await axiosInstance.post('/auth/me')
    if (response.status == 200) {
      return response.data.data
    } 
    return {}
  },
  logout () {
    localStorage.removeItem(JWT_TOKEN_LOCALSTORAGE_KEY)
  }
}

export const productAPI = {
  async getAll () {
    const response = await axiosInstance.get('/product')
    if (response.status == 200) {
      return response.data
    }
    return []
  },
  async saveNew (product) {
    const response = await axiosInstance.post('/product', product)
    if (response.status == 201) {
      return response.data
    }
    return {
      success: false
    }
  }
}
