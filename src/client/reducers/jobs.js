import { combineReducers } from 'redux'
import { ADD_JOB, TOGGLE_JOB } from '../constants/actionTypes'
import job from './job'

const byId = (state = {}, action) => {
	switch (action.type) {
	case ADD_JOB:
	case TOGGLE_JOB:
		return {
			...state,
			[action.id]: job(state[action.id], action)
		}
	default:
		return state
	}
}

const allIds = (state = [], action) => {
	switch (action.type) {
	case ADD_JOB:
		return [
			...state,
			action.id
		]
	default:
		return state
	}
}

const jobs = combineReducers({
	byId,
	allIds,
})

const getAllJobs = state => state.allIds.map(id => state.byId[id])

export default jobs

export const getVisibleJobList = (state, visibilityFilter) => {
	const allJobs = getAllJobs(state)
	switch (visibilityFilter) {
	case 'SHOW_ACTIVE':
		return allJobs.filter(item => item.active)
	case 'SHOW_PASSIVE':
		return allJobs.filter(item => !item.active)
	default:
		return allJobs
	}
}

