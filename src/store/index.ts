import Vue from "vue";
import Vuex from "vuex";

import ModalStore from "./modules/ModalStore";
import ProductFormStore from "./modules/ProductFormStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ModalStore,
    ProductFormStore
  }
});
