import React from 'react'
import JobList from '../component/job-list'

const getVisibleJobList = (store) => {
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
		const { store } = this.context
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		)
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	render() {
		const { store } = this.context
		return (
			<JobList
				jobs={getVisibleJobList(store)}
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

VisibleJobList.contextTypes = {
	store: React.PropTypes.object,
}

export default VisibleJobList
