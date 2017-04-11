import jobs from '../src/client/reducer/jobs'

test('ADD_JOB', () => {
	const stateBefore = []
	const action = {
		id: 0,
		type: 'ADD_JOB',
		title: 'foo',
	}

	const stateAfter = [{
		id: 0,
		title: 'foo',
		active: true,
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
