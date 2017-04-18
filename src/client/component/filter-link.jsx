import React from 'react'

const FilterLink = ({
	filter,
	currentFilter,
	onFilterClick,
	children,
	}) => {
	if (currentFilter === filter) {
		return <span>{children}</span>
	}

	return (
		<button
			onClick={(e) => {
				e.preventDefault()
				onFilterClick(filter)
			}
			}
		>
			{children}
		</button>
	)
}

FilterLink.defaultProps = {
	filter: 'SHOW_ALL',
	currentFilter: 'SHOW_ALL'
}

FilterLink.propTypes = {
	filter: React.PropTypes.string,
	currentFilter: React.PropTypes.string,
	children: React.PropTypes.node.isRequired,
	onFilterClick: React.PropTypes.func.isRequired,
}
export default FilterLink
