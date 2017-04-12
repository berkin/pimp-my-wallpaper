import { combineReducers, createStore } from 'redux'
import jobs from '../reducer/jobs'
import visibilityFilter from '../reducer/visibility-filter'

const store = createStore(combineReducers({
	jobs,
	visibilityFilter,
}))

export default store
