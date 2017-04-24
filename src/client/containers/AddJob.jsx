import React from 'react'
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

const AddJob = connect()(AddJobComponent)

export default AddJob
