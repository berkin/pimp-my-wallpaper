import job from './job'

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
