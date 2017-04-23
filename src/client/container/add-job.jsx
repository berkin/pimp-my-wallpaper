import React from 'react'
import { connect } from 'react-redux'

let AddJob = ({ dispatch }) => {
	let input
	let id = 0

	return (
		<div>
			<input type="text" ref={(node) => { input = node }} />
			<button
				onClick={() => {
					dispatch({
						id: (id += 1),
						type: 'ADD_JOB',
						title: input.value
					})
					input.value = ''
				}
				}
			>
			Add Job
			</button>
		</div>
	)
}

AddJob = connect()(AddJob)

export default AddJob
