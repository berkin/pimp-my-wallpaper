import React from 'react'

const Job = ({
	onClick,
	title,
	active
}) => (
	<li
		role="button"
		className={active ? 'active' : 'passive'}
		onClick={onClick}
	>
		{title}
	</li>
)

export default Job
