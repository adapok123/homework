import { setTodosToLocalStorage } from './storage.js'


export const createTodoElement = todo => {
	const todoItem = document.createElement('li')
	todoItem.className = `todo ${todo.completed ? 'completed' : ''}`
	todoItem.dataset.id = todo.id

	todoItem.innerHTML = `
        <div class="todo-text">${todo.text}</div>
        <div class="todo-actions">
            <button class="button button-complete" title="${
							todo.completed ? 'Возобновить' : 'Завершить'
						}">
                ${todo.completed ? '↶' : '✓'}
            </button>
            <button class="button button-edit" title="Редактировать">✎</button>
            <button class="button button-delete" title="Удалить">✕</button>
        </div>
    `

	return todoItem
}


export const createTodoEditElement = todo => {
	const todoItem = document.createElement('li')
	todoItem.className = `todo editing`
	todoItem.dataset.id = todo.id

	todoItem.innerHTML = `
        <input class="todo-edit-input" type="text" value="${todo.text}">
        <div class="todo-actions">
            <button class="button button-save" title="Сохранить">✓</button>
            <button class="button button-cancel" title="Отменить">✕</button>
        </div>
    `

	return todoItem
}


export const updateStats = (
	todos,
	totalCountElement,
	completedCountElement
) => {
	const total = todos.length
	const completed = todos.filter(todo => todo.completed).length
	totalCountElement.textContent = total
	completedCountElement.textContent = completed
}


export const renderTodos = (
	todos,
	todosElement,
	totalCountElement,
	completedCountElement,
	setTodosToLocalStorage
) => {
	todosElement.innerHTML = ''

	if (todos.length === 0) {
		const emptyState = document.createElement('div')
		emptyState.className = 'empty-state'
		emptyState.textContent = 'Задач пока нет. Добавьте первую задачу!'
		todosElement.appendChild(emptyState)
		updateStats(todos, totalCountElement, completedCountElement)
		setTodosToLocalStorage(todos)
		return
	}

	todos.forEach(todo => {
		const todoElement = createTodoElement(todo)
		todosElement.appendChild(todoElement)
	})

	updateStats(todos, totalCountElement, completedCountElement)
	setTodosToLocalStorage(todos)
}
