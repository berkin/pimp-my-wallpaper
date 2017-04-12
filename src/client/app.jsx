import React from 'react'
import store from './store/app'

let id = 0
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Jobs</h1>
				<ul>
					{this.props.jobs.map(job =>
						<li key={job.id}>
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
			</div>
		)
	}
}

App.defaultProps = {
	jobs: [],
}

App.propTypes = {
	jobs: React.PropTypes.shape({
		id: React.PropTypes.number,
		title: React.PropTypes.string,
		active: React.PropTypes.string
	}),
}

export default App
