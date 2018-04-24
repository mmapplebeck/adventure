import * as actions from './actionTypes'

const defaultState = {
  currentLevel: 'start'
}

const player = (state = defaultState, action) => {
  switch (action.type) {
    case actions.UPDATE_CURRENT_LEVEL:
      return {
        ...state,
        currentLevel: action.id
      }
    default:
      return state
  }
}

export default player
