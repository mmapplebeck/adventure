import { combineReducers } from 'redux'
import game from './Editor/reducer'
import * as actions from './actionTypes'

const currentMusic = (state = '', action) => {
  switch (action.type) {
    case actions.UPDATE_CURRENT_MUSIC:
      return action.src
    default:
      return state
  }
}

const currentBackground = (state = '', action) => {
  switch (action.type) {
    case actions.UPDATE_CURRENT_BACKGROUND:
      return action.src
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentMusic,
  currentBackground,
  game
})

export default rootReducer
