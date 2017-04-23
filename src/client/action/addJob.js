let id = 0

const addTodo = title => ({
	id: (id += 1),
	type: 'ADD_JOB',
	title,
})

export default addTodo
