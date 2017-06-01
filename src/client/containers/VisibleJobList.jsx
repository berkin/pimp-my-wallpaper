import React, { Component } from 'react'
import { connect } from 'react-redux'
import JobList from '../components/JobList'
import { getVisibleJobList, getIsFetching } from '../reducers'
import * as actions from '../actions'

class VisibleJobList extends Component {
	componentDidMount() {
		this.fetchData()
	}

	componentDidUpdate(prevProps) {
		if (this.props.filter !== prevProps.filter) {
			this.fetchData()
		}
	}

	fetchData() {
		const { filter, requestJobs, fetchJobs } = this.props
		requestJobs(filter)
		fetchJobs(filter)
	}
	render() {
		const { toggleJob, jobs, isFetching } = this.props
		if (isFetching && jobs.length === 0) {
			return <p>loading...</p>
		}

		return (
			<JobList
				jobs={jobs}
				onJobClick={toggleJob}
			/>)
	}
}

const mapStateToProps = state => ({
	jobs: getVisibleJobList(
		state,
		state.visibilityFilter,
	),
	isFetching: getIsFetching(
		state,
		state.visibilityFilter,
	),
	filter: state.visibilityFilter,
})

VisibleJobList = connect(
	mapStateToProps,
	actions,
)(VisibleJobList)

export default VisibleJobList
