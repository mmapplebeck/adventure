import editorReducer from './Editor/reducer'

export default function rootReducer(state = {}, action) {
  return {
    game: editorReducer(state.game, action)
  }
}
