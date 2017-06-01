import { combineReducers } from 'redux'
import { RECEIVE_JOBS, REQUEST_JOBS } from '../constants/actionTypes'

const createList = (filter) => {
	const ids = (state = [], action) => {
		if (action.filter !== filter) {
			return state
		}
		switch (action.type) {
		case RECEIVE_JOBS:
			return action.response.map(job => job.id)
		default:
			return state
		}
	}

	const isFetching = (state = false, action) => {
		if (action.filter !== filter) {
			return state
		}
		switch (action.type) {
		case REQUEST_JOBS:
			return true
		case RECEIVE_JOBS:
			return false
		default:
			return state
		}
	}

	return combineReducers({
		ids,
		isFetching,
	})
}


export default createList

export const getIds = state => state.ids

export const getIsFetching = state => state.isFetching
