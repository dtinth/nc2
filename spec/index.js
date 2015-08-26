
describe('a spec', function () {
  it('should run', function () {
    // it runs
    console.log(() => {})
  })
})

import Sample             from '../src/reducers/Sample'
import * as ActionTypes   from '../src/constants/ActionTypes'

describe('Sample', function () {
  it('should change text', function () {
    let state = Sample(undefined, { type: ActionTypes.TITLE_CHANGED, text: 'meow' })
    console.log(state)
    if (state.title !== 'meow') throw new Error('oho')
  })
})
