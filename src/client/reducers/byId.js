
const byId = (state = {}, action) => {
	if (action.response) {
		return {
			...state,
			...action.response.entities.jobs,
		}
	}

	return state
}

export default byId

export const getJob = (state, id) => state[id]
