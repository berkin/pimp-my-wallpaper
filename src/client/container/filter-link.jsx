import React from 'react'
import Link from '../component/link'
import store from '../store/app'

class FilterLink extends React.Component {
	componentDidMount() {
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		)
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	render() {
		const state = store.getState()
		return (
			<Link
				active={this.props.filter === state.visibilityFilter}
				onClick={() =>
					store.dispatch({
						type: 'SET_VISIBILITY_FILTER',
						filter: this.props.filter,
					})
				}
			>
				{this.props.children}
			</Link>
		)
	}
}

export default FilterLink
