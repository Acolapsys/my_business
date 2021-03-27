import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    userName: "demo",
    userPassword: "demo123",
  },
  mutations: {
    SET_AUTH(state, payload) {
      state.isAuth = payload;
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
      } else {
        throw new Error("Пользователь с таким именем и паролем не найден");
      }
    },
  },
});
