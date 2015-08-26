import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'

let createStoreWithMiddleware

// Configure the dev tools when in DEV mode
if (__DEV__) {
  let { devTools, persistState } = require('redux-devtools')
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  )
} else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
}

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}