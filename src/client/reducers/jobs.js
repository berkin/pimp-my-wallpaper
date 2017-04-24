const job = (state = {}, action) => {
	switch (action.type) {
	case 'ADD_JOB':
		return {
			id: action.id,
			title: action.title,
			active: true,
		}
	case 'TOGGLE_JOB':
		if (state.id !== action.id) {
			return state
		}

		return {
			...state,
			active: !state.active,
		}
	default:
		return state
	}
}

const jobs = (state = [], action) => {
	switch (action.type) {
	case 'ADD_JOB':
		return [
			...state,
			job(undefined, action),
		]
	case 'TOGGLE_JOB':
		return state.map(item => job(item, action))
	default:
		return state
	}
}

export default jobs
