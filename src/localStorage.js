export function loadState() {
  try {
    const serializedState = localStorage.getItem('adventureState')

    if (!serializedState) return undefined

    return JSON.parse(serializedState)
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
