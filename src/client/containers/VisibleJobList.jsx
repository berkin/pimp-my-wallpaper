import { connect } from 'react-redux'
import JobList from '../components/JobList'
import { getVisibleJobList } from '../reducers'
import { toggleJob } from '../actions'

const mapStateToProps = state => ({
	jobs: getVisibleJobList(
		state,
		state.visibilityFilter,
	)
})

const VisibleJobList = connect(
	mapStateToProps,
	{ onJobClick: toggleJob },
)(JobList)

export default VisibleJobList
