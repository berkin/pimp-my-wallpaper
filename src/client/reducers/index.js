import { combineReducers } from 'redux'

import jobs from './jobs'
import visibilityFilter from './visibilityFilter'

const app = combineReducers({
	jobs,
	visibilityFilter,
})

export default app

