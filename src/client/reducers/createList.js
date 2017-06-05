import { combineReducers } from 'redux'
import { FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE, FETCH_JOBS_REQUEST } from '../constants/actionTypes'

const createList = (filter) => {
	const ids = (state = [], action) => {
		if (action.filter !== filter) {
			return state
		}
		switch (action.type) {
		case FETCH_JOBS_SUCCESS:
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
		case FETCH_JOBS_REQUEST:
			return true
		case FETCH_JOBS_SUCCESS:
		case FETCH_JOBS_FAILURE:
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
