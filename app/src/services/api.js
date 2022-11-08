import axios from 'axios'

const JWT_TOKEN_LOCALSTORAGE_KEY = 'jwt_token'
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ing2ejZ0SnRDM1NxUXFadlhZNElVcCJ9.eyJpc3MiOiJodHRwczovL3JlaW5hLmpwLmF1dGgwLmNvbS8iLCJzdWIiOiJqYzI0U2pxc3k1VVpOZlhlZFRqRnY3YVdHMTdRT3lTRkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hbmdlbC1iYWJ5LWRiL2FwaSIsImlhdCI6MTY2NzkxNTY4MiwiZXhwIjoxNjY4NTIwNDgyLCJhenAiOiJqYzI0U2pxc3k1VVpOZlhlZFRqRnY3YVdHMTdRT3lTRiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.WIUJ2haoe3u3KbgD6QLW_L91clf-rp_vPmuyveUkR4KaUcYSGDdWksJOlnhk6YSYslpZFakM9TVK2zKiynk8jhxuBmE8ROJ-7wivKQlWSiXe9wFaetZ5HPwQhpmwq-UzGgbM2S1gg9AYPxTZwBT4BTTL8AFVEt5WxyeTVvUgbbbQIkOqNB89lA7eGcXwUDpMlw0nuWSNw_5gNwQ6KVGt8mohFwyBpZSx27eswS3pJar1DfhNPL2tNPQNTs0MzKKFHaL3brTzdL1OIuffh9BRu9Jarbytx5WmsT60OhED2MN4k3IRu1gOn_4DVp16HaRfmwhKGN9mXzRVN7MmHMS5cg";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8095/api',
  headers: {
    Authorization: `Bearer ${token}`,
  }
})
const loginInstance = axios.create({
  baseURL: 'http://localhost:8095',
  headers: {
    Authorization: `Bearer ${token}`,
  }
})

loginInstance.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';
loginInstance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';


axiosInstance.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

const inboundAxiosInstance = axios.create({
  baseURL: 'http://localhost:8092/api',
  headers: {
    Authorization: `Bearer ${token}`,
  }
})
inboundAxiosInstance.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';
inboundAxiosInstance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
if (token) {
  inboundAxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

const outboundAxiosInstance = axios.create({
  baseURL: 'http://localhost:8093/api',
  headers: {
    Authorization: `Bearer ${token}`,
  }
})
outboundAxiosInstance.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';
outboundAxiosInstance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
if (token) {
  outboundAxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export const authAPI = {
  async login (username, password,) {
    const response = await loginInstance.post('/login', {
      username,
      password
    })
    // console.log(response.data)
    if (response.data.success) {
      localStorage.setItem("username", username)
      localStorage.setItem("login_success", true)
      localStorage.setItem("userId", response.data.userId)
      return response.data
    } else {
      localStorage.removeItem("username")
      localStorage.removeItem("userId")
      localStorage.setItem("login_success", false)
      return response.data
    }
  },
  logout () {
    localStorage.removeItem(JWT_TOKEN_LOCALSTORAGE_KEY)
    localStorage.removeItem("username")
    localStorage.setItem("login_success", false)
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
  },
  async getById (id) {
    const response = await axiosInstance.get(`/stock/${id}`)
    if (response.status == 200) {
      return response.data
    }
    return []
  },
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
  },
  async getById (id) {
    const response = await axiosInstance.get(`/log/${id}`)
    if (response.status == 200) {
      return response.data
    }
    return []
  },
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
  },
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
