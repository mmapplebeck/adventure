import * as actions from './actionTypes'

export function createLevel(id) {
  return {
    type: actions.CREATE_LEVEL,
    id
  }
}

export function deleteLevel(id) {
  return {
    type: actions.DELETE_LEVEL,
    id
  }
}

export function updateLevel(id, payload) {
  return {
    type: actions.UPDATE_LEVEL,
    id,
    payload
  }
}

export function updateChoice(levelId, choiceId, payload) {
  return {
    type: actions.UPDATE_CHOICE,
    levelId,
    choiceId,
    payload
  }
}

export function deleteChoice(levelId, choiceId) {
  return {
    type: actions.DELETE_CHOICE,
    levelId,
    choiceId
  }
}

export function createChoice(levelId) {
  return {
    type: actions.CREATE_CHOICE,
    levelId
  }
}

export function updateGame(payload) {
  return {
    type: actions.UPDATE_GAME,
    payload
  }
}

export function updatePreview(payload) {
  return {
    type: actions.UPDATE_PREVIEW,
    payload
  }
}
