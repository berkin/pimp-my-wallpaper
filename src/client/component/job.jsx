import React from 'react'

const Job = ({
	onClick,
	title,
	active
}) =>
	<li
		role="menuitemcheckbox"
		aria-checked={active}
		tabIndex="0"
		className={active ? 'active' : 'passive'}
		onClick={onClick}
	>
		{title}
	</li>


export default Job
