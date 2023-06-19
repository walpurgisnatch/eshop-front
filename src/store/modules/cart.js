export const namespaced = true

export const state = {
  items: []
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  PUSH_ITEM(state, item) {
    state.items.push(item)
  },
  INC_COUNT(state, id) {
    state.items.find((item) => item.id == id).count++
  },
  SET_COUNT(state, { id, count }) {
    state.items.find((item) => item.id == id).count = count
  },
  REMOVE_ITEM(state, id) {
    state.items = state.items.filter((item) => item.id != id)
  },
  CLEAR_ITEMS(state) {
    state.items = []
  }
}

export const actions = {
  addItem({ commit, state }, { item, count }) {
    count = count ? count : 1
    let finded = state.items.find((i) => i.id == item.id)
    if (finded) {
      commit('SET_COUNT', { id: finded.id, count: finded.count + count })
    } else {
      item.count = count
      commit('PUSH_ITEM', item)
    }
    localStorage.setItem('items', JSON.stringify(state.items))
  },
  changeCount({ commit }, { id, count }) {
    commit('SET_COUNT', { id, count })
    localStorage.setItem('items', JSON.stringify(state.items))
  },
  removeItem({ commit }, id) {
    commit('REMOVE_ITEM', id)
    localStorage.setItem('items', JSON.stringify(state.items))
  },
  clearItems({ commit }) {
    commit('CLEAR_ITEMS')
    localStorage.removeItem('items')
  },
  getFromStorage({ commit }) {
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      commit('SET_ITEMS', items)
    }
  }
}

export const getters = {
  items(state) {
    return state.items
  },
  itemsCount(state) {
    return state.items.length
  },
  totalCost(state) {
    const cost = state.items.reduce((total, item) => {
      return (total += item.cost * item.count)
    }, 0)
    console.log(cost)
    return cost
  }
}
