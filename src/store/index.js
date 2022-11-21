import { createStore } from "vuex";

export default createStore({
  state: {
    /**
     * Array of users. Users are saved in the context. Used in HomeView.
     * @type {Array}
     */
    users: [],
    /**
     * Text of the search input in order to search an user dinamically.
     * @type {string}
     */
    searchInput: "",
  },
  getters: {
    /**
     * Function that shows the saved users in vuex.
     * @param {Object} state Context data.
     * @returns {Array} Array of users from the context.
     */
    getUsers(state) {
      return state.users;
    },
    /**
     * Function that shows the saved input text of the search.
     * @param {Object} state Context data.
     * @returns {string} Search input data from the context.
     */
    getSearchInput(state) {
      return state.searchInput;
    },
  },
  mutations: {
    /**
     * Function that updates the array of users.
     * @param {Object} state Context data
     * @param {Array} data Array of users
     */
    setUsers(state, data) {
      state.users = data;
    },
    /**
     * Function that updates the search input field.
     * @param {Object} state Context data
     * @param {string} data Search input
     */
    setSearchInput(state, data) {
      state.searchInput = data;
    },
  },
  actions: {
    /**
     * Function that calls to the setUsers for updating the data context.
     * @param {Array} usersArray Array of users
     */
    loadUsers({ commit }, usersArray) {
      commit("setUsers", usersArray);
    },
  },
  modules: {},
});
