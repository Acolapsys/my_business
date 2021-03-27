import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    userName: "demo",
    userPassword: "demo123",
    userData: {
      FIO: "",
      avatar: "",
      profession: "",
      mail: "",
      phoneNumber: "",
    },
  },
  mutations: {
    SET_AUTH(state, payload) {
      state.isAuth = payload;
    },
    SET_USER_DATA(state, userData) {
      state.userData = { ...userData };
    },
  },
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
  },
  actions: {
    signIn({ state, commit }, { user, password }) {
      if (user === state.userName && password === state.userPassword) {
        commit("SET_AUTH", true);
        commit("SET_USER_DATA", JSON.parse(localStorage.getItem("userData")));
      } else {
        throw new Error("Пользователь с таким именем и паролем не найден");
      }
    },
    signOut({ commit }) {
      commit("SET_AUTH", false);
    },
    saveUserData({ commit }, userData) {
      commit("SET_USER_DATA", userData);
      localStorage.setItem("userData", JSON.stringify(userData));
    },
  },
});
