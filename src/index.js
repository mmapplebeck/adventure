import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { HashRouter } from 'react-router-dom'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import App from './components/App'

const persistedState = loadState()
console.log('persisted', persistedState)
const store = createStore(rootReducer, persistedState)

store.subscribe(throttle(() => {
  saveState({
    game: store.getState().game
  })
}))

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
