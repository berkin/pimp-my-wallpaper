import React from 'react'
import Job from './job'

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

export default JobList
