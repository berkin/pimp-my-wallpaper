import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './component/app'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = AppComponent =>
	<AppContainer>
		<AppComponent />
	</AppContainer>

ReactDOM.render(wrapApp(App), rootEl)

if (module.hot) {
	module.hot.accept('./component/app', () => {
		// eslint-disable-next-line global-require
		const NextApp = require('./component/app').default
		ReactDOM.render(wrapApp(NextApp), rootEl)
	})
}
