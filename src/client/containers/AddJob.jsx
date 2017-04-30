import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addJob } from '../actions'

const AddJobComponent = ({ dispatch }) => {
	let input

	return (
		<div>
			<input type="text" ref={(node) => { input = node }} />
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
