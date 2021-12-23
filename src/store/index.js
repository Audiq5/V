import Vue from "vue";
import Vuex from "vuex";

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 下载插件
Vue.use(Vuex);

// 创建对象
const state = {
  counter: 1000,
  stu: [
    { id: 1, name: "kobe", age: 20 },
    { id: 2, name: "lxy", age: 10 },
    { id: 3, name: "hh", age: 30 },
    { id: 4, name: "js", age: 25 }
  ],
  info: {
    name: "lb",
    age: 19,
    price: 6300
  }

}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
   
});

// 导出对象
export default store;
