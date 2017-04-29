import { combineReducers } from 'redux'

import jobs, * as fromJobs from './jobs'
import visibilityFilter from './visibilityFilter'

const app = combineReducers({
	jobs,
	visibilityFilter
})

export default app

export const getVisibleJobList = (state, filter) => fromJobs.getVisibleJobList(state.jobs, filter)
