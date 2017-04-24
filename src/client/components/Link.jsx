import React from 'react'
import { PropTypes } from 'prop-types'

const Link = ({
	active,
	onClick,
	children,
	}) => {
	if (active) {
		return <span>{children}</span>
	}

	return (
		<button
			onClick={onClick}
		>
			{children}
		</button>
	)
}

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
}

export default Link
