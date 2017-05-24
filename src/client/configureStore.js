import { createStore } from 'redux'
import appReducers from './reducers'
import { fetchJobs } from '../api'

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

	const store = createStore(
		appReducers,
		persistedState
	)

	if (process.env.NODE_ENV !== 'production') {
		store.dispatch = addLoggingToDispatch(store)
	}
	return store
}
export default configureStore
