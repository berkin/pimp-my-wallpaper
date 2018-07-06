import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addJob } from '../actions'
import TimePicker from '../components/TimePicker'

class AddJobComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			startAt: {
				hour: '00',
				min: '00',
			},
			endAt: {
				hour: '00',
				min: '00',
			},
		}
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(name, value) {
		this.state = {
			[name]: value,
		}
	}

	render() {
		const { dispatch } = this.props
		return (
			<div>
				<label htmlFor="add-job">Add Job:</label>
				<input
					type="text"
					id="add-job"
					ref={node => {
						this.input = node
					}}
				/>
				<br />
				<label htmlFor="start-at">Start At: </label>
				<TimePicker
					name="start-at"
					id="start-at"
					value={this.state.startAt}
					onInputChange={this.handleInputChange}
				/>
				<br />
				<label htmlFor="end-at">End At: </label>
				<TimePicker
					name="end-at"
					id="end-at"
					value={this.state.endAt}
					onInputChange={this.handleInputChange}
				/>
				<br />
				<button
					onClick={() => {
						dispatch(addJob(this.input.value))
						this.input.value = ''
					}}>
					Add Job
				</button>
			</div>
		)
	}
}

AddJobComponent.propTypes = {
	dispatch: PropTypes.func.isRequired,
}

const AddJob = connect()(AddJobComponent)

export default AddJob
