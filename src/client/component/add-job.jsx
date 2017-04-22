import React from 'react'

const AddJob = (pros, { store }) => {
	let input
	let id = 0

	return (
		<div>
			<input type="text" ref={(node) => { input = node }} />
			<button
				onClick={() => {
					store.dispatch({
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

AddJob.contextTypes = {
	store: React.PropTypes.object
}

export default AddJob
