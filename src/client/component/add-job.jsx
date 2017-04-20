import React from 'react'
import store from '../store/app'

const AddJob = () => {
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

export default AddJob
