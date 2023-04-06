export const namespaced = true

export const state = {
  items: []
}

export const mutations = {
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
    state.items = state.items.filter( (item) => item.id != id )
  },
  CLEAR_ITEMS(state) {
    state.items = []
  }
}

export const actions = {
  addItem({ commit, state },  item) {
    let finded = state.items.find((i) => i.id == item.id)
    if (finded) {
      commit('INC_COUNT', finded.id)
    } else {
      item.count = 1
      commit('PUSH_ITEM', item)
    }
  },
  changeCount({ commit }, { id, count }) {
    commit('SET_COUNT', { id, count })
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
  },
  itemsCount (state) {
    return state.items.length
  }
}