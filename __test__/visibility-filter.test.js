import visibilityFilter from '../src/client/reducers/visibilityFilter'
import { SET_VISIBILITY_FILTER } from '../src/client/actions'

test('SHOW_ACTIVE', () => {
	const stateBefore = undefined

	const action = {
		type: SET_VISIBILITY_FILTER,
		filter: 'ACTIVE',
	}

	const stateAfter = 'ACTIVE'

	expect(visibilityFilter(stateBefore, action)).toBe(stateAfter)
})
