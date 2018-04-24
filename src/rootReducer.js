import { combineReducers } from 'redux'
import { game, editor } from './Editor/reducer'
import player from './Player/reducer'

const rootReducer = combineReducers({
  editor,
  player,
  game
})

export default rootReducer
