import * as ActionTypes from '../constants/ActionTypes'
import createReducer    from '../utils/createReducer'

let DEFAULT_STATE = {
  title: 'Home'
}

export default createReducer(DEFAULT_STATE, {
  [ActionTypes.TITLE_CHANGED](state, { text }) {
    return { ...state, title: text }
  }
})
