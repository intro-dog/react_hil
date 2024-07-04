import axios from "axios"

const API = "https://jsonplaceholder.typicode.com/todos"

const services = {
  get: (id) =>
    axios(id ? API + `/${id}` : API)
      .then(({ data }) => data)
      .catch((err) => console.log(err)),
  put: (id, obj) =>
    axios
      .put(API + `/${id}`, obj)
      .then(({ data }) => data)
      .catch((err) => console.log(err)),
  patch: (id, obj) =>
    axios
      .patch(API + `/${id}`, obj)
      .then(({ data }) => data)
      .catch((err) => console.log(err)),
  delete: (id) =>
    axios
      .delete(API + `/${id}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err)),
  post: (obj) =>
    axios
      .post(API, obj)
      .then(({ data }) => data)
      .catch((err) => console.log(err)),
}

export default services
