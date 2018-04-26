import request from 'superagent'
import queryString from 'query-string'
import { loadFromDB } from './db'

export async function loadState() {
  try {
    const response = await loadFromDB()

    if (response) {
      return response
    } else {
      const serializedState = localStorage.getItem('adventureState')

      if (!serializedState) return undefined

      return JSON.parse(serializedState)
    }

  } catch(err) {
    return undefined
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem('adventureState', serializedState)
  } catch(err) {
    // ignore
  }
}
