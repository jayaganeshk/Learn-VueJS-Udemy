import * as types from './mutation-types.js'

export const mutations = {
  [types.INIT_JOKES](state, payload) {
    state.jokes.push(...payload)
  },
  [types.ADD_JOKE](state, payload) {
    let payloadJSONString = JSON.stringify(payload);
    let val = `[${payloadJSONString}]`
    let pay = JSON.parse(val)
    state.jokes.push(...pay)
  },
 [types.Remove_JOKE](state, payload) {
    state.jokes.splice(payload, 1)
  },
}
