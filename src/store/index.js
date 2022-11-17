import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    searchInput: "",
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getSearchInput(state) {
      return state.searchInput;
    },
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
    setSearchInput(state, data) {
      state.searchInput = data;
    },
  },
  actions: {
    loadUsers({ commit }, param) {
      commit("setUsers", param);
    },
  },
  modules: {},
});
