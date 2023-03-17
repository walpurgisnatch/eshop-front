import axios from 'axios'

export const namespaced = true

export const state = {
  user: null
}

export const mutations = {
  SET_DATA(state, user) {
    state.user = user
    localStorage.setItem('user', JSON.stringify(user))
    axios.defaults.headers.common['Authorization'] = `Bearer ${
      user.token
    }`
  },
  LOG_OUT() {
    localStorage.removeItem('user')
    location.reload()
  }
}

export const actions = {
  logIn({ commit }, user) {
    commit('SET_DATA', user)
  },
  setData({ commit }, user) {
    commit('SET_DATA', user)
  },
  logOut({ commit }) {
    commit('LOG_OUT')
  }
}

export const getters = {
  loggedIn (state) {
    return !!state.user
  }
}