import React from 'react'
import store from './store/app'
import FilterLink from './component/filter-link'

let id = 0
class App extends React.Component {
	render() {
		const {
			jobs,
			visibilityFilter
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
				<ul>
					{visibleJobs.map(job =>
						<li
							className={job.active ? 'active' : 'passive'}
							role="button"
							key={job.id}
							onClick={() => {
								store.dispatch({
									id: job.id,
									type: 'TOGGLE_JOB'
								})
							}
							}
						>
							{job.title}
						</li>
					)
				}
				</ul>
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
}

App.propTypes = {
	jobs: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default App
