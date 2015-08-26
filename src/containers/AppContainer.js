import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import AppRoot from '../components/AppRoot'
import AppView from '../components/AppView'

const store = configureStore()

export class AppContainer extends React.Component {
  render() {
    return (
      <AppRoot
          devToolsEnabled={__DEV__}
          renderAppView={() => this.renderAppView()}
          renderDevTools={() => this.renderDevTools()} />
    )
  }
  renderDevTools() {
    if (!__DEV__) return null
    let { DevTools, LogMonitor } = require('redux-devtools/lib/react')
    return (
      <DevTools store={store} monitor={LogMonitor} />
    )
  }
  renderAppView() {
    return <Provider store={store}>{() => <AppView />}</Provider>
  }
}

export default AppContainer
