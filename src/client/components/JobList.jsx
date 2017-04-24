import React from 'react'
import { PropTypes } from 'prop-types'
import Job from './Job'

const JobList = ({
	jobs,
	onJobClick,
}) => (
	<ul>
		{
			jobs.map(job =>
				<Job
					key={job.id}
					{...job}
					onClick={() => onJobClick(job.id)}
				/>
			)
		}
	</ul>
	)

JobList.propTypes = {
	jobs: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		active: PropTypes.bool.isRequired,
	}).isRequired).isRequired,
	onJobClick: PropTypes.func.isRequired,
}

export default JobList
