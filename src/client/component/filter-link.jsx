import React from 'react'
import store from '../store/app'

const FilterLink = ({
	filter,
	currentFilter,
	children,
	}) => {
	if (currentFilter === filter) {
		return <span>{children}</span>
	}

	return (<button
		onClick={() => {
			store.dispatch({
				type: 'SET_VISIBILITY_FILTER',
				filter,
			})
		}}
	>
		{children}
	</button>)
}

FilterLink.defaultProps = {
	filter: 'SHOW_ALL',
	children: null,
	currentFilter: 'SHOW_ALL'
}

FilterLink.propTypes = {
	filter: React.PropTypes.string,
	currentFilter: React.PropTypes.string,
	children: React.PropTypes.node,
}
export default FilterLink
