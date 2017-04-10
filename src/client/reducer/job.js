const jobs = (state = [], action) => {
	switch (action.type) {
	case 'ADD_JOB':
		return [
			...state,
			{
				title: action.title,
			},
		]
	case 'TOGGLE_JOB':
		return state.map((job) => {
			if (job.id !== action.id) {
				return job
			}

			return {
				...job,
				active: !job.active,
			}
		})
	default:
		return state
	}
}

export default jobs
