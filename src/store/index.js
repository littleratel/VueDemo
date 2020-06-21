import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions";

Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

//
export default store
