import { combineReducers } from 'redux'
import { RECEIVE_JOBS } from '../constants/actionTypes'

const byId = (state = {}, action) => {
	switch (action.type) {
	case RECEIVE_JOBS: {
		const nextState = { ...state }
		action.response.forEach((job) => {
			nextState[job.id] = job
		})
		return nextState
	}
	default:
		return state
	}
}

const allIds = (state = [], action) => {
	if (action.filter !== 'SHOW_ALL') {
		return state
	}
	switch (action.type) {
	case RECEIVE_JOBS:
		return action.response.map(job => job.id)
	default:
		return state
	}
}

const activeIds = (state = [], action) => {
	if (action.filter !== 'SHOW_ACTIVE') {
		return state
	}
	switch (action.type) {
	case RECEIVE_JOBS:
		return action.response.map(item => item.id)
	default:
		return state
	}
}

const passiveIds = (state = [], action) => {
	if (action.filter !== 'SHOW_PASSIVE') {
		return state
	}
	switch (action.type) {
	case RECEIVE_JOBS:
		return action.response.map(item => item.id)
	default:
		return state
	}
}

const idsByFilter = combineReducers({
	SHOW_ALL: allIds,
	SHOW_ACTIVE: activeIds,
	SHOW_PASSIVE: passiveIds,
})

const jobs = combineReducers({
	byId,
	idsByFilter,
})


export default jobs

export const getVisibleJobList = (state, visibilityFilter) => {
	const ids = state.idsByFilter[visibilityFilter]
	return ids.map(id => state.byId[id])
}

