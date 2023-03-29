
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  signUp(user) {
    return apiClient.post('/api/signup', user)
  },
  logIn(username, password) {
    return apiClient.post('/login', username, password)
  },
  logOut() {
    return apiClient.get('/logout')
  },
  getUser(token) {
    return apiClient.get('/api/user?token=' + token)
  },
  getItems() {
    return apiClient.get('/api/items')
  },
  getItem(id) {
    return apiClient.get('/api/item/' + id)
  },
  createItem(item) {
    return apiClient.post('/api/items', item)
  },
  deleteItem(item) {
    return apiClient.delete('/api/item/' + item)
  },
  getComments(item) {
    return apiClient.get('/api/comments/' + item)
  },
  createComment(comment) {
    return apiClient.post('/api/comments', comment)
  },
  deleteComment(comment) {
    return apiClient.delete('/api/comment/' + comment)
  }
}
