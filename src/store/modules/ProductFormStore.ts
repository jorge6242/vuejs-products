import Product from "../../interfaces/forms/ProductInterface";

/* Product Form Store */

const product: Product[] = [
  {
    imgUrl: "",
    name: "",
    price: 0
  }
];

// State object
const state = {
  product
};

// Getter functions
const getters = {
  product: (state: any) => state.product
};

// Actions
const actions = {
  setProduct(context: any, payload: any) {
    return new Promise(resolve => {
      context.commit("SET_PRODUCT", payload);
      resolve();
    });
  }
};

// Mutations
const mutations = {
  SET_PRODUCT(state: any, payload: any) {
    state.product = { ...state.product, ...payload };
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
