import axios from 'axios'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:10001/';

// =================request and response interceptors===================
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {"Content-Type": "application/json;charset=UTF-8"}
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return response;
    } else {
      return Promise.reject(response.status);
    }
  }, //
  error => {
    return Promise.reject(error)
  }
)

// ======================= export methods =========================
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

export function get(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
