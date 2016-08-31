import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// state 保存初始数据
const state = {
  num: 1
}

//  mutation 函数
const mutations = {}

export default new Vuex.Store({
  state,
  mutations
})
