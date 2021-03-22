// https://official-joke-api.appspot.com/random_ten
import * as types from '../mutations/mutation-types.js'

export const initJokes = ({ commit }) => {
  fetch('https://official-joke-api.appspot.com/random_ten', {
      methods: 'GET'
    })
    .then(
      response => response.json()
    )
    .then(json => commit(types.INIT_JOKES, json))
  // .then(json => console.log(json))
}

export const addJoke = ({ commit }) => {
  fetch('https://official-joke-api.appspot.com/jokes/random', {
      methods: 'GET'
    })
    .then(
      response => response.json()
    )
    .then(json => commit(types.ADD_JOKE, json))
  // .then(json => console.log(json))
}

export const removeJoke = ({ commit }, index) => {
  commit(types.Remove_JOKE, index)
}
