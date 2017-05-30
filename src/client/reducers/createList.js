import { RECEIVE_JOBS } from '../constants/actionTypes'

const createList = filter => (state = [], action) => {
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


export default createList

export const getIds = state => state
