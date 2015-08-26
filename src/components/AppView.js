import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as HomeActions from '../actions/HomeActions'
import styles from './AppView.css'

class AppView extends Component {
  render() {
    const { title, dispatch } = this.props
    const actions = bindActionCreators(HomeActions, dispatch)
    return (
      <div className={styles.root}>
        <h1 className={styles.text}>Welcome {title}! This is nc2.</h1>
        <button onClick={e => actions.changeTitle(prompt())}>
          Update Title
        </button>
      </div>
    )
  }
}

export default connect(state => state.Sample)(AppView)
