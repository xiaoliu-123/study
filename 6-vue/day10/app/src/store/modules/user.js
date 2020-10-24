// user的仓库
import { findAllUser } from '@/api/user.js'
export default {
  namespaced: true,
  state: {
    userMsg: 'user仓库的数据',
    userData: []
  },
  getters: {},
  mutations: {
    changeUserData(state, payload) {
      state.userData = payload
    }
  },
  actions: {
    async findAllUser({ commit, dispatch }, payload) {
      // findAllUser api内的方法
      let res = await findAllUser(payload);
      //拿到数据后，发起突变，修改state中的userData数据
      commit('changeUserData', res.data)
    }
  }
}