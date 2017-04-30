import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import appReducers from './reducers'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

const persistedState = {
	jobs: {
		allIds: ['random'],
		byId: {
			random: {
				id: 'random',
				title: 'random',
				active: true,
			}
		}
	}
}

const addLoggingToDispatch = (store) => {
	const rawDispatch = store.dispatch
	return (action) => {
		console.group(action.type)
		console.log('prev state', store.getState())
		console.log('action', action)
		const returnValue = rawDispatch(action)
		console.log('next state', store.getState())
		console.groupEnd(action.type)
		return returnValue
	}
}

const store = createStore(appReducers, persistedState)
if (process.env.NODE_ENV !== 'production') {
	store.dispatch = addLoggingToDispatch(store)
}

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
