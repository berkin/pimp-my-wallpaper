import React from 'react'
import store from './store/app'
import JobList from './component/job-list'
import FilterLink from './component/filter-link'

let id = 0
class App extends React.Component {
	render() {
		const {
			jobs,
			visibilityFilter,
		} = this.props

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
					onJobClick={(jobId) => {
						store.dispatch({
							type: 'TOGGLE_JOB',
							id: jobId
						})
					}}
				/>
				<input type="text" ref={(node) => { this.input = node }} />
				<button
					onClick={() => {
						id += 1
						store.dispatch({
							id,
							type: 'ADD_JOB',
							title: this.input.value,
						})
						this.input.value = ''
					}
				}
				>
				Add Job
				</button>
				<div>
					Show:
					{' '}
					<FilterLink
						filter="SHOW_ALL"
						currentFilter={visibilityFilter}
					>All</FilterLink>
					{', '}
					<FilterLink
						filter="SHOW_ACTIVE"
						currentFilter={visibilityFilter}
					>
					Active
					</FilterLink>
					{', '}
					<FilterLink
						filter="SHOW_PASSIVE"
						currentFilter={visibilityFilter}
					>Passive</FilterLink>
				</div>
			</div>
		)
	}
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
