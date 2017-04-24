import * as types from '../constants/actionTypes'

let nextJobId = 0

export const addJob = title => ({
	id: (nextJobId += 1),
	type: types.ADD_JOB,
	title,
})

export const setVisibilityFilter = filter => ({
	type: types.SET_VISIBILITY_FILTER,
	filter,
})

export const toggleJob = jobId => ({
	type: types.TOGGLE_JOB,
	id: jobId,
})
