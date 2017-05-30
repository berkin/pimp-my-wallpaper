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

export default byId

export const getJob = (state, id) => state[id]
