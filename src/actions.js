import * as actions from './actionTypes'

export function updateCurrentMusic(src) {
  return {
    type: actions.UPDATE_CURRENT_MUSIC,
    src
  }
}
