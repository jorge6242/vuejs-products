import Vue from "vue";

export const GetProducts = (): any => Vue.prototype.$http.get("/products");
