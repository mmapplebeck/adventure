import * as actions from './actionTypes'

class Level {
  constructor() {
    this.message = ''
    this.choices = []
  }
}

class Choice {
  constructor() {
    this.text = ''
    this.nextLevel = ''
  }
}

const defaultGameState = {
  music: '',
  background_image: '',
  levels: {
    start: {
      message: '',
      choices: []
    }
  }
}

const defaultEditorState = {
  previewMusic: '',
  previewBackground: ''
}

const choices = (state = [], action) => {
  switch (action.type) {
    case actions.UPDATE_CHOICE:
      return state.map((choice, i) => {
        if (i === action.choiceId) {
          return {
            ...state[i],
            ...action.payload
          }
        }
        return choice
      })

    case actions.CREATE_CHOICE:
      return [
        ...state,
        new Choice()
      ]

    case actions.DELETE_CHOICE:
      let deleted = [...state]

      deleted.splice(action.choiceId, 1)

      return deleted

    default:
      return state
  }
}

const levels = (state = {}, action) => {
  switch (action.type) {
    case actions.UPDATE_LEVEL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.payload
        }
      }

    case actions.CREATE_LEVEL:
      return {
        ...state,
        [action.id]: new Level()
      }

    case actions.DELETE_LEVEL:
      const deleted = {...state}

      delete deleted[action.id]

      return deleted

    case actions.CREATE_CHOICE:
    case actions.DELETE_CHOICE:
    case actions.UPDATE_CHOICE:
      return {
        ...state,
        [action.levelId]: {
          ...state[action.levelId],
          choices: choices(state[action.levelId].choices, action)
        }
      }

    default:
      return state
  }
}

export function editor(state = defaultEditorState, action) {
  switch (action.type) {
    case actions.UPDATE_PREVIEW:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export function game(state = defaultGameState, action) {
  let choices

  switch (action.type) {
    case actions.UPDATE_GAME:
      return {
        ...state,
        ...action.payload
      }

    case actions.CREATE_CHOICE:
    case actions.UPDATE_CHOICE:
    case actions.DELETE_CHOICE:
    case actions.CREATE_LEVEL:
    case actions.UPDATE_LEVEL:
    case actions.DELETE_LEVEL:
      return {
        ...state,
        levels: levels(state.levels, action)
      }

    default:
      return state
  }
}
