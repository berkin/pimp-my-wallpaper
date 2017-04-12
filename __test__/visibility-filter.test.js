import visibilityFilter from '../src/client/reducer/visibility-filter'

test('SHOW_ACTIVE', () => {
	const stateBefore = undefined

	const action = {
		type: 'SET_VISIBILITY_FILTER',
		filter: 'ACTIVE',
	}

	const stateAfter = 'ACTIVE'

	expect(visibilityFilter(stateBefore, action)).toBe(stateAfter)
})
