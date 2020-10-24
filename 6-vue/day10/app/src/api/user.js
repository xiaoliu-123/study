// 管理user用户管理模块的请求
import request from '../utils/request.js'
export default {
  findAllUser(params) {
    return request.get('/user/findAll', { params })
  },
  saveOrUpdate(params) {
    return request.post('/user/saveOrUpdate', params)
  }
}
