import React, { Component } from 'react'
import { connect } from 'react-redux'
import JobList from '../components/JobList'
import { getVisibleJobList } from '../reducers'
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
		const { filter, fetchJobs } = this.props
		fetchJobs(filter)
	}
	render() {
		const { toggleJob, ...rest } = this.props
		return (
			<JobList
				onJobClick={toggleJob}
				{...rest}
			/>)
	}
}

const mapStateToProps = state => ({
	jobs: getVisibleJobList(
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
