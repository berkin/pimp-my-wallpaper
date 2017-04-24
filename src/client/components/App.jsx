import React from 'react'
import VisibleJobList from '../containers/VisibleJobList'
import AddJob from '../containers/AddJob'
import FilterBar from './FilterBar'

const App = () =>
	<div>
		<h1>Jobs</h1>
		<VisibleJobList />
		<AddJob />
		<FilterBar />
	</div>

export default App
