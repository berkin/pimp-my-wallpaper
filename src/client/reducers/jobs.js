import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

const listByFilter = combineReducers({
	SHOW_ALL: createList('SHOW_ALL'),
	SHOW_ACTIVE: createList('SHOW_ACTIVE'),
	SHOW_PASSIVE: createList('SHOW_PASSIVE'),
})

const jobs = combineReducers({
	byId,
	listByFilter,
})

export default jobs

export const getVisibleJobList = (state, visibilityFilter) => {
	const ids = fromList.getIds(state.listByFilter[visibilityFilter])
	return ids.map(id => fromById.getJob(state.byId, id))
}

export const getIsFetching = (state, visibilityFilter) =>
	fromList.getIsFetching(state.listByFilter[visibilityFilter])
