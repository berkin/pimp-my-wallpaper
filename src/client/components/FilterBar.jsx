import React from 'react'
import FilterLink from '../containers/FilterLink'

const FilterBar = () =>
	<div>
		Show:
		{' '}
		<FilterLink
			filter="SHOW_ALL"
		>
			All
		</FilterLink>
		{', '}
		<FilterLink
			filter="SHOW_ACTIVE"
		>
			Active
		</FilterLink>
		{', '}
		<FilterLink
			filter="SHOW_PASSIVE"
		>
			Passive
		</FilterLink>
	</div>

export default FilterBar
