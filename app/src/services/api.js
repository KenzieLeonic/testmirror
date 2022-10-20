import axios from 'axios'

const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im9MZ1YtZWtLbTJPejlhLUZIMFM4byJ9.eyJpc3MiOiJodHRwczovL2Rldi1ueGE4dGZhcC51cy5hdXRoMC5jb20vIiwic3ViIjoiTG1hNWNlRkpGNlBGN29rbTkwVVlYY3lVdEtvRjJtMmlAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYW93LWF1bmdwb3IzLyIsImlhdCI6MTY2NjI2NDYyNiwiZXhwIjoxNjY2MzUxMDI2LCJhenAiOiJMbWE1Y2VGSkY2UEY3b2ttOTBVWVhjeVV0S29GMm0yaSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.pyiXYgPBDMyUSe9YRQ3BIIOH7B2zlgBERs9VoHhix2ZayAj41946iUeq0zFdKYESJaclX7M5cqwMwXCw4TjfaBhSWxSs7Z5JNpwDh1jxaeaULeg69yMqZFabAmUNROkDmoAsQ9Ah0bWXrDEstUW3Ca2zsEq8SdSGePD_vbvvNhkV79aIhORREqvuQcVHFvanqXR1CvbVpD6rLWGGAf1q4qjlrbcuXkNgJ8jG3RFSXhicyzXMcvHg2LgxV-thV_3GMpZczX-XIx7X4RRGsNvafbXy-1Ci3VzfBNEKEsEjVJCCWmBdjLacRIq00lChDuJmx5izlCtiht1ukH0xpTcafQ';

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
      return response.data.data
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