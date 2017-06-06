import v4 from 'node-uuid'

const fakeDb = {
	jobs: [{
		id: v4(),
		title: 'foo',
		active: true,
	},
	{
		id: v4(),
		title: 'bar',
		active: false,
	}]
}

const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

export const fetchJobs = filter =>
	delay(500).then(() => {
		switch (filter) {
		case 'SHOW_ACTIVE':
			return fakeDb.jobs.filter(item => item.active)
		case 'SHOW_PASSIVE':
			return fakeDb.jobs.filter(item => !item.active)
		default:
			return fakeDb.jobs
		}
	})

export const addJob = text =>
	delay(500).then(() => {
		const job = {
			id: v4(),
			title: text,
			active: true,
		}
		fakeDb.jobs.push(job)
		return job
	})

export const toggleJob = id =>
	delay(500).then(() => {
		const job = fakeDb.jobs.find(item => id === item.id)
		job.active = !job.active
		return job
	})
