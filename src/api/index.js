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

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

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

