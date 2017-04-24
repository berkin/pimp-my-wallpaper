import { connect } from 'react-redux'
import JobList from '../components/JobList'
import { toggleJob } from '../actions'

const getVisibleJobList = (
	jobs,
	visibilityFilter
) => {
	switch (visibilityFilter) {
	case 'SHOW_ACTIVE':
		return jobs.filter(item => item.active)
	case 'SHOW_PASSIVE':
		return jobs.filter(item => !item.active)
	default:
		return jobs
	}
}

const mapStateToProps = state => ({
	jobs: getVisibleJobList(
		state.jobs,
		state.visibilityFilter,
	)
})

const mapDispatchToProps = dispatch => ({
	onJobClick: jobId =>
		dispatch(
			toggleJob(jobId)
		)
})

const VisibleJobList = connect(
	mapStateToProps,
	mapDispatchToProps,
)(JobList)

export default VisibleJobList
