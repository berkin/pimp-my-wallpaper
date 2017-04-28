import { v4 } from 'node-uuid'
import * as types from '../constants/actionTypes'

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

