import axios from 'axios'

const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ing2ejZ0SnRDM1NxUXFadlhZNElVcCJ9.eyJpc3MiOiJodHRwczovL3JlaW5hLmpwLmF1dGgwLmNvbS8iLCJzdWIiOiJqYzI0U2pxc3k1VVpOZlhlZFRqRnY3YVdHMTdRT3lTRkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hbmdlbC1iYWJ5LWRiL2FwaSIsImlhdCI6MTY2Njc3NjE0MiwiZXhwIjoxNjY2ODYyNTQyLCJhenAiOiJqYzI0U2pxc3k1VVpOZlhlZFRqRnY3YVdHMTdRT3lTRiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.d4DA4suFMvMgEhgM5SrSjbq3FEzgSb7Pyf4mFcNV7h-TaDmAQCkbw7U48e84bvIMvOKsWYLXoXheFpkl-d2H5OsfI4GAPCumUDOdQX68mDK2y_Fhn9wls7yIEG5uNWHh3LTkwN0TZiXTtPUmMn3VJDN6e6nqQnRD0Iq-l-SLA3sNj_ZZVguc_gjnTnFB82ZdlhcT1I-Rg3GEMfVuZPOvYuGFugh_OldOe4ZhlvZ_th4i4Y2Veec9R32Jx3aKHTpqWcrvSUHYighCBMMKp_ZFu7HxDk219QTjSDTm5sVO3piPpFIGubJwGbBhRpcIHKHaP0q84JtWHr4MrHfWsU0Jlg';

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
