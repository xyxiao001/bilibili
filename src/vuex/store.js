import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// state 保存初始数据
const store = new Vuex.Store({
  state: {
    count: 0
  },
  //  mutation 函数
  mutation: {
    increment (state) {
      state.count++
    }
  },
  // 触发事件函数
  actions: {
    increment ({ commit }) {
      commit('increment')
    }
  }
})

export default store
