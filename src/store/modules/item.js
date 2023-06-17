import EventService from "@/services/EventService.js";

export const namespaced = true;

export const state = {
  items: [],
  limit: 10,
  pages: 0,
  filters: {},
};

export const mutations = {
  SET_ITEMS(state, { items, pages }) {
    state.items = items;
    state.pages = pages;
  },
  CLEAR_ITEMS(state) {
    state.items = [];
  },
  SET_FILTERS(state, filters) {
    state.filters = filters;
  },
  CLEAR_FILTERS(state) {
    state.filters = {};
  },
};

export const actions = {
  fetchItems({ commit, state }, offset) {
    EventService.getItems(state.limit, offset - 1, JSON.stringify(state.filters))
      .then((response) => {
        commit("SET_ITEMS", {
          items: response.data[0],
          pages: response.data[1],
        });
      })
      .catch((error) => {
        console.log("There was an error: " + error);
      });
  },
  clearItems({ commit }) {
    commit("CLEAR_ITEMS");
  },
  setFilters({ commit, dispatch }, filters) {
    commit("SET_FILTERS", filters);
    dispatch('fetchItems', 1)
  },
  clearFilters({ commit }) {
    commit("CLEAR_FILTERS");
  },
};

export const getters = {
  items(state) {
    return state.items;
  },
  pages(state) {
    return state.pages;
  },
  limit(state) {
    return state.limit;
  },
  filters(state) {
    return state.filters;
  },
};
