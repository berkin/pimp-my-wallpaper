import jobs from '../src/client/reducer/job'

test('ADD_JOB', () => {
	const stateBefore = []
	const action = {
		type: 'ADD_JOB',
		title: 'foo',
	}

	const stateAfter = [{
		title: 'foo',
	}]
	expect(jobs(stateBefore, action)).toEqual(stateAfter)
})

test('TOGGLE_JOB', () => {
	const stateBefore = [
		{
			id: 0,
			title: 'foo',
			active: true,
		},
	]

	const action = {
		type: 'TOGGLE_JOB',
		id: 0,
	}

	const stateAfter = [
		{
			id: 0,
			title: 'foo',
			active: false,
		},
	]

	expect(jobs(stateBefore, action)).toEqual(stateAfter)
})
