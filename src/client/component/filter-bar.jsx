import React from 'react'
import FilterLink from './filter-link'

const FilterBar = ({
	visibilityFilter,
	onFilterClick,
}) =>
	<div>
		Show:
		{' '}
		<FilterLink
			filter="SHOW_ALL"
			currentFilter={visibilityFilter}
			onFilterClick={onFilterClick}
		>All</FilterLink>
		{', '}
		<FilterLink
			filter="SHOW_ACTIVE"
			currentFilter={visibilityFilter}
			onFilterClick={onFilterClick}
		>
		Active
		</FilterLink>
		{', '}
		<FilterLink
			filter="SHOW_PASSIVE"
			currentFilter={visibilityFilter}
			onFilterClick={onFilterClick}
		>Passive</FilterLink>
	</div>

export default FilterBar
