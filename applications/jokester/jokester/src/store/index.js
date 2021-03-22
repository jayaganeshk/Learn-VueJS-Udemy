import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from '../mutations/index.js'
import * as actions from './actions.js'

Vue.use(Vuex)

const state = {
  jokes: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
