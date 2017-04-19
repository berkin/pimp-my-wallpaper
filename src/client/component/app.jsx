import React from 'react'
import store from '../store/app'
import JobList from './job-list'
import AddJob from './add-job'
import FilterBar from './filter-bar'

let id = 0
const App = ({
	jobs,
	visibilityFilter,
}) => {
	const visibleJobs = jobs.filter((item) => {
		switch (visibilityFilter) {
		case 'SHOW_ACTIVE':
			return	item.active === true
		case 'SHOW_PASSIVE':
			return	item.active === false
		default:
			return true
		}
	})

	return (
		<div>
			<h1>Jobs</h1>
			<JobList
				jobs={visibleJobs}
				onJobClick={jobId =>
					store.dispatch({
						type: 'TOGGLE_JOB',
						id: jobId
					})
				}
			/>
			<AddJob
				onAddClick={title =>
					store.dispatch({
						id: (id += 1),
						type: 'ADD_JOB',
						title
					})
				}
			/>
			<FilterBar />
		</div>
	)
}

App.defaultProps = {
	jobs: [],
	visibilityFilter: 'SHOW_ALL',
}

App.propTypes = {
	jobs: React.PropTypes.arrayOf(React.PropTypes.object),
	visibilityFilter: React.PropTypes.oneOf(['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_PASSIVE']),
}

export default App
