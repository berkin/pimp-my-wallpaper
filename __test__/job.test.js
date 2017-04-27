import jobs from '../src/client/reducers/jobs'
import { ADD_JOB, TOGGLE_JOB } from '../src/client/actions'

jest.mock('uuid', () => {
    return {
        v4: jest.fn(() => 1)
    };
});

test('ADD_JOB', () => {
	const stateBefore = []
	const action = {
		type: ADD_JOB,
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
		type: TOGGLE_JOB,
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
