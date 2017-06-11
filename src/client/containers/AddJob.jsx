import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addJob } from '../actions'
import TimePicker from '../components/TimePicker'

const AddJobComponent = ({ dispatch }) => {
	let input

	return (
		<div>
			<label htmlFor="add-job">Add Job:</label>
			<input type="text" id="add-job" ref={(node) => { input = node }} />
			<br />
			<label htmlFor="start-at">Start At: </label>
			<TimePicker id="start-at" />
			<br />
			<label htmlFor="end-at">End At: </label>
			<TimePicker id="end-at" />
			<br />
			<button
				onClick={() => {
					dispatch(addJob(input.value))
					input.value = ''
				}
				}
			>
			Add Job
			</button>
		</div>
	)
}

AddJobComponent.propTypes = {
	dispatch: PropTypes.func.isRequired,
}

const AddJob = connect()(AddJobComponent)

export default AddJob
