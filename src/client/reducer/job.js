const job = (state, action) => {
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

export default job
