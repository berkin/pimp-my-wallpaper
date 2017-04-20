import React from 'react'
import VisibleJobList from '../container/visible-job-list'
import AddJob from './add-job'
import FilterBar from './filter-bar'

const App = () =>
	<div>
		<h1>Jobs</h1>
		<VisibleJobList />
		<AddJob />
		<FilterBar />
	</div>

export default App
