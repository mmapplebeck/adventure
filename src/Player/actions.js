import * as actions from './actionTypes'

export function updateCurrentLevel(id) {
  return {
    type: actions.UPDATE_CURRENT_LEVEL,
    id
  }
}
