import { createStore } from 'vuex'
import * as user from '@/store/modules/user.js'
import * as notification from '@/store/modules/notification.js'
import * as item from '@/store/modules/item.js'
import * as comment from '@/store/modules/comment.js'
import * as cart from '@/store/modules/cart.js'


export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    notification,
    item,
    comment,
    cart
  }
})
