import { v4 } from 'node-uuid'
import { getIsFetching } from '../reducers'
import * as types from '../constants/actionTypes'
import * as api from '../../api/'

export const fetchJobs = filter => (dispatch, getState) => {
	if (getIsFetching(getState(), filter)) {
		return Promise.resolve()
	}

	dispatch({
		type: types.FETCH_JOBS_REQUEST,
		filter,
	})

	return api.fetchJobs(filter).then(
		response =>
		dispatch({
			type: types.FETCH_JOBS_SUCCESS,
			filter,
			response,
		}),
		error =>
		dispatch({
			type: types.FETCH_JOBS_FAILURE,
			filter,
			message: error.message || 'Something went wrong!'
		})
		)
}

export const addJob = title => ({
	id: v4(),
	type: types.ADD_JOB,
	title
})

export const setVisibilityFilter = filter => ({
	type: types.SET_VISIBILITY_FILTER,
	filter
})

export const toggleJob = jobId => ({
	type: types.TOGGLE_JOB,
	id: jobId
})

