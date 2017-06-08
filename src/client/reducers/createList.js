import { combineReducers } from 'redux'
import { ADD_JOB_SUCCESS, TOGGLE_JOB_SUCCESS, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE, FETCH_JOBS_REQUEST } from '../constants/actionTypes'

const createList = (filter) => {
	const ids = (state = [], action) => {
		switch (action.type) {
		case FETCH_JOBS_SUCCESS:
			return action.filter === filter ?
				action.response.result :
				state
		case ADD_JOB_SUCCESS:
			return filter !== 'SHOW_PASSIVE' ?
				[...state, action.response.result] :
				state
		case TOGGLE_JOB_SUCCESS: {
			const { result: toggleId, entities } = action.response
			const active = entities.jobs[toggleId].active

			const shouldRemove =
				(active && filter === 'SHOW_PASSIVE') ||
				(!active && filter === 'SHOW_ACTIVE')

			return shouldRemove ?
				state.filter(id => id !== toggleId) :
				state
		}
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
