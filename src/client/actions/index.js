import { v4 } from 'node-uuid'
import * as types from '../constants/actionTypes'
import * as api from '../../api/'

const receiveJobs = (filter, response) => ({
	type: types.RECEIVE_JOBS,
	filter,
	response,
})

export const fetchJobs = filter =>
	api.fetchJobs(filter).then(response =>
		receiveJobs(filter, response)
	)


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

