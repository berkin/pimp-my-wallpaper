import React from 'react'

const AddJob = ({
	onAddClick
}) => {
	let input
	return (
		<div>
			<input type="text" ref={(node) => { input = node }} />
			<button
				onClick={() => {
					onAddClick(input.value)
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
