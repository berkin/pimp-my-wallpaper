import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

import jobApp from './reducers'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

const store = createStore(jobApp)

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = AppComponent =>
	<AppContainer>
		<Provider store={store}>
			<AppComponent />
		</Provider>
	</AppContainer>

ReactDOM.render(wrapApp(App), rootEl)

if (module.hot) {
	module.hot.accept('./components/App', () => {
		// eslint-disable-next-line global-require
		const NextApp = require('./components/App').default
		ReactDOM.render(wrapApp(NextApp), rootEl)
	})
}
