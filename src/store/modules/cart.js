export const namespaced = true

export const state = {
  items: []
}

export const mutations = {
  PUSH_ITEM(state, item) {
    state.items.push(item)    
  },
  REMOVE_ITEM(state, id) {
    state.items = state.items.filter( (item) => item.id != id )
  },
  CLEAR_ITEMS(state) {
    state.items = []
  }
}

export const actions = {
  addItem({ commit }, item) {
    commit('PUSH_ITEM', item)
  },
  removeItem({ commit }, id) {
    commit('REMOVE_ITEM', id)
  },
  clearItems({ commit }) {
    commit('CLEAR_ITEMS')
  }
}

export const getters = {
  items (state) {
    return state.items
  }
}