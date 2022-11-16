import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
  },
  actions: {
    loadUsers({ commit }, param) {
      commit("setUsers", param);
    },
  },
  modules: {},
});
