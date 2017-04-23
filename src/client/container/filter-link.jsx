import { connect } from 'react-redux'
import Link from '../component/link'
import setVisibilityFilter from '../action/setVisibilityFilter'

const mapStateToProps = (state, props) => ({
	active: props.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, props) => ({
	onClick: () =>
		dispatch(
			setVisibilityFilter(props.filter)
		)
})


const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Link)

export default FilterLink
