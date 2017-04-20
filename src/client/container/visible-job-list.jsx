import React from 'react'
import store from '../store/app'
import JobList from '../component/job-list'

const getVisibleJobList = () => {
	const state = store.getState()
	switch (state.visibilityFilter) {
	case 'SHOW_ACTIVE':
		return state.jobs.filter(item => item.active)
	case 'SHOW_PASSIVE':
		return state.jobs.filter(item => !item.active)
	default:
		return state.jobs
	}
}

class VisibleJobList extends React.Component {

	componentDidMount() {
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		)
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	render() {
		return (
			<JobList
				jobs={getVisibleJobList()}
				onJobClick={jobId =>
					store.dispatch({
						type: 'TOGGLE_JOB',
						id: jobId
					})
				}
			/>
		)
	}
}

export default VisibleJobList
