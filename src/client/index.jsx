import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import store from './store/app'
import App from './component/app'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = AppComponent =>
	<AppContainer>
		<Provider store={store}>
			<AppComponent />
		</Provider>
	</AppContainer>

ReactDOM.render(wrapApp(App), rootEl)

if (module.hot) {
	module.hot.accept('./component/app', () => {
		// eslint-disable-next-line global-require
		const NextApp = require('./component/app').default
		ReactDOM.render(wrapApp(NextApp), rootEl)
	})
}
