import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import appReducers from './reducers'

const configureStore = () => {
	const middlewares = [promise]
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger())
	}

	const store = createStore(
		appReducers,
		applyMiddleware(...middlewares),
	)


	return store
}
export default configureStore
