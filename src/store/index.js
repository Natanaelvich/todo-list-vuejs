import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import tasks from "./modules/tasks";

export default new Vuex.Store({
  modules: {
    tasks,
  },
});
