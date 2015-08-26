import React from 'react'
import styles from './AppRoot.css'

export class AppRoot extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.main}>
          {this.props.renderAppView()}
        </div>
        {this.renderDevToolsContainer()}
      </div>
    )
  }
  renderDevToolsContainer() {
    return (
      this.props.devToolsEnabled
      ? <div className={styles.devTools}>{this.props.renderDevTools()}</div>
      : null)
  }
}

export default AppRoot
