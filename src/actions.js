import * as actions from './actionTypes'

export function updateCurrentMusic(src) {
  return {
    type: actions.UPDATE_CURRENT_MUSIC,
    src
  }
}

export function updateCurrentBackground(src) {
  return {
    type: actions.UPDATE_CURRENT_BACKGROUND,
    src
  }
}
