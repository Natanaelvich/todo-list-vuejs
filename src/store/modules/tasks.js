export default {
  state: {
    tasks: [],
  },

  getters: {
    percentDone(state) {
      if (state.tasks.length) {
        const tasks = state.tasks.length;
        const percentDone = state.tasks.filter((t) => t.done === true)
          .length;
        const percent = parseFloat(
          (percentDone / tasks) * 100,
        ).toFixed(0);

        return percent;
      }
      return 0;
    },
  },

  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
  },

  actions: {
    addTask({ commit }, payload) {
      commit("addTask", payload);
    },
  },
};
