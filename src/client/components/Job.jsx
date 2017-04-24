import React from 'react'
import { PropTypes } from 'prop-types'

const Job = ({
	title,
	active,
	onClick,
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

Job.propTypes = {
	onClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
}

export default Job
