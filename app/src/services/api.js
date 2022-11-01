import axios from 'axios'

const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ing2ejZ0SnRDM1NxUXFadlhZNElVcCJ9.eyJpc3MiOiJodHRwczovL3JlaW5hLmpwLmF1dGgwLmNvbS8iLCJzdWIiOiJqYzI0U2pxc3k1VVpOZlhlZFRqRnY3YVdHMTdRT3lTRkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hbmdlbC1iYWJ5LWRiL2FwaSIsImlhdCI6MTY2NzI4OTExOSwiZXhwIjoxNjY3Mzc1NTE5LCJhenAiOiJqYzI0U2pxc3k1VVpOZlhlZFRqRnY3YVdHMTdRT3lTRiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.b1NQYAATEaehp2CL4eya76p7oHA7OEwG1u_4zhCk49gBq0kt8GH0xz-pbbFDxCnyntzdMMI8xKVjl0fMiBBXogHbhBIRJLqxr53cc5Q1tWvrcfS4D8AIRoLG9pLsRQnPKdR0bDaE3P7i8J75o217r4UwY-zXwhVN3uOXhEbgc96vMXqaEb8AEqEQdC9PlVBL9TCS7N6r_koKZK_1M9suty-r77HSgvOXhIS4et0ALpGIaEIYvzUkKzTo-DT3Tluoem1GYhcJegz2AcV5qYxwNXSrM575yWVZUelXJq3qnuoPRSRM9cLtJXXHwd-xYMi-H3uAivu5UL9f5pO330SYkg';

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

const inboundAxiosInstance = axios.create({
  baseURL: 'http://localhost:8092/api',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  }
})
inboundAxiosInstance.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';
inboundAxiosInstance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
if (token) {
  inboundAxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

const outboundAxiosInstance = axios.create({
  baseURL: 'http://localhost:8092/api',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  }
})
outboundAxiosInstance.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';
outboundAxiosInstance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
if (token) {
  outboundAxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
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

export const stockAPI = {
  async getAll () {
    const response = await axiosInstance.get('/stock')
    if (response.status == 200) {
      return response.data
    }
    return []
  },
  async saveNew (stock) {
    const response = await axiosInstance.post('/stock', stock)
    if (response.status == 201) {
      return response.data
    }
    return {
      success: false
    }
  }
}

export const logAPI = {
  async getAll () {
    const response = await axiosInstance.get('/log')
    if (response.status == 200) {
      return response.data
    }
    return []
  },
  async saveNew (log) {
    const response = await axiosInstance.post('/log', log)
    if (response.status == 201) {
      return response.data
    }
    return {
      success: false
    }
  }
}

export const locationAPI = {
  async getAll () {
    const response = await axiosInstance.get('/location')
    if (response.status == 200) {
      return response.data
    }
    return []
  },
  async saveNew (location) {
    const response = await axiosInstance.post('/location', location)
    if (response.status == 201) {
      return response.data
    }
    return {
      success: false
    }
  }
}

export const inboundAPI = {
  async getAll () {
    const response = await inboundAxiosInstance.get('/inbound')
    if (response.status == 200) {
      return response.data
    }
    return []
  },
  async saveNew (inbound) {
    const response = await inboundAxiosInstance.post('/inbound', inbound)
    if (response.status == 201) {
      return response.data
    }
    return {
      success: false
    }
  }
}

export const outboundAPI = {
  async getAll () {
    const response = await outboundAxiosInstance.get('/outbound')
    if (response.status == 200) {
      return response.data
    }
    return []
  },
  async saveNew (outbound) {
    const response = await outboundAxiosInstance.post('/outbound', outbound)
    if (response.status == 201) {
      return response.data
    }
    return {
      success: false
    }
  }
}
