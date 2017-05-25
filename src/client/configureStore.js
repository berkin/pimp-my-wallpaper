import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import appReducers from './reducers'

const configureStore = () => {
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

	const middlewares = [promise]
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger())
	}

	const store = createStore(
		appReducers,
		persistedState,
		applyMiddleware(...middlewares),
	)


	return store
}
export default configureStore
