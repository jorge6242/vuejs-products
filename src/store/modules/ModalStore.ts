/* Todo.store.js */

// State object
const state = {
  show: false,
  content: ""
};

// Getter functions
const getters = {
  statusModal: (state: any) => state.show,
  contentModal: (state: any) => state.content
};

// Actions
const actions = {
  updateModal(context: any, payload: any) {
    context.commit("UPDATE", payload);
  }
};

// Mutations
const mutations = {
  UPDATE(state: any, data: any) {
    state.show = data.show;
    state.content = data.content;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
