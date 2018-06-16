const { createStore } = require('redux')

const INCREASE_TIME = 'INCREASE_TIME'

const initialState = {
  count: 0,
}

const reducer = (state, action) => {
  switch(action.type) {
    case INCREASE_TIME:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}

const makeStore = () => createStore(reducer, initialState)

const increaseTime = () => ({
  type: INCREASE_TIME,
})

module.exports = { makeStore, increaseTime }

