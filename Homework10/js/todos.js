
export const deleteTodo = (todos, id) => {
	return todos.filter(todo => todo.id !== id)
}


export const createTodo = (todos, text, nextId) => {
	const newTodo = {
		id: nextId,
		text: text,
		completed: false,
	}
	return [...todos, newTodo]
}


export const updateTodo = (todos, id, updatedTodo) => {
	return todos.map(todo =>
		todo.id === id ? { ...todo, ...updatedTodo } : todo
	)
}


export const toggleTodoCompletion = (todos, id) => {
	return todos.map(todo =>
		todo.id === id ? { ...todo, completed: !todo.completed } : todo
	)
}


export const getNextId = todos => {
	if (todos.length === 0) return 1
	return Math.max(...todos.map(todo => todo.id)) + 1
}
