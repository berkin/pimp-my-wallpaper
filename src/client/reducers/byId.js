import { FETCH_JOBS_SUCCESS, ADD_JOB_SUCCESS } from '../constants/actionTypes'

const byId = (state = {}, action) => {
	switch (action.type) {
	case FETCH_JOBS_SUCCESS: {
		const nextState = { ...state }
		action.response.forEach((job) => {
			nextState[job.id] = job
		})
		return nextState
	}
	case ADD_JOB_SUCCESS: {
		return {
			...state,
			[action.response.id]: action.response
		}
	}
	default:
		return state
	}
}

export default byId

export const getJob = (state, id) => state[id]
