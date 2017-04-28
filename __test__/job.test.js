import jobs from '../src/client/reducers/jobs'
import { ADD_JOB, TOGGLE_JOB } from '../src/client/constants/actionTypes'

jest.mock('node-uuid', () => ({
	v4: jest.fn(() => 1)
})
)
const id = require('node-uuid').v4()

test('ADD_JOB', () => {
	const stateBefore = []
	const action = {
		type: ADD_JOB,
		title: 'foo',
	}

	const stateAfter = [{
		id,
		title: 'foo',
		active: true,
	}]
	expect(jobs(stateBefore, action)).toEqual(stateAfter)
})

test('TOGGLE_JOB', () => {
	const stateBefore = [
		{
			id,
			title: 'foo',
			active: true,
		},
	]

	const action = {
		type: TOGGLE_JOB,
	}

	const stateAfter = [
		{
			id,
			title: 'foo',
			active: false,
		},
	]

	expect(jobs(stateBefore, action)).toEqual(stateAfter)
})
