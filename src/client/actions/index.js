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

export const addJob = title => dispatch =>
	api.addJob(title).then(response =>
		dispatch({
			type: types.ADD_JOB_SUCCESS,
			response,
		})
	)

export const toggleJob = jobId => dispatch =>
	api.toggleJob(jobId).then(response =>
		dispatch({
			type: types.TOGGLE_JOB_SUCCESS,
			response,
		})
	)

export const setVisibilityFilter = filter => ({
	type: types.SET_VISIBILITY_FILTER,
	filter
})
