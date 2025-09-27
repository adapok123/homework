import { getTodosFromLocalStorage, setTodosToLocalStorage } from './storage.js'
import {
	createTodo,
	deleteTodo,
	updateTodo,
	toggleTodoCompletion,
	getNextId,
} from './todos.js'
import { createTodoElement, createTodoEditElement, renderTodos } from './dom.js'
import { initParticles } from './particles.js'


const formElement = document.querySelector('.form')
const inputElement = document.querySelector('.input')
const todosElement = document.querySelector('.todos')
const totalCountElement = document.querySelector('.total-count')
const completedCountElement = document.querySelector('.completed-count')


let todos = getTodosFromLocalStorage() || []
let nextId = getNextId(todos)


const toggleEditMode = (todoItem, todo) => {
	const isEditing = todoItem.classList.contains('editing')

	if (isEditing) {
		
		const editInput = todoItem.querySelector('.todo-edit-input')
		const newText = editInput.value.trim()

		if (newText && newText !== todo.text) {
		
			todos = updateTodo(todos, todo.id, { text: newText })
		}

	
		const newTodoElement = createTodoElement(todos.find(t => t.id === todo.id))
		todoItem.replaceWith(newTodoElement)
	} else {
		
		const editElement = createTodoEditElement(todo)
		todoItem.replaceWith(editElement)


		const editInput = editElement.querySelector('.todo-edit-input')
		editInput.focus()
		editInput.select()
	}
}


formElement.addEventListener('submit', event => {
	event.preventDefault()

	const text = inputElement.value.trim()
	if (text) {
		todos = createTodo(todos, text, nextId)
		nextId += 1
		renderTodos(
			todos,
			todosElement,
			totalCountElement,
			completedCountElement,
			setTodosToLocalStorage
		)
		inputElement.value = ''
		inputElement.focus()
	}
})


todosElement.addEventListener('click', event => {
	const target = event.target
	const todoItem = target.closest('.todo')

	if (!todoItem) return

	const id = parseInt(todoItem.dataset.id)
	const todo = todos.find(t => t.id === id)

	if (!todo) return

	if (target.classList.contains('button-complete')) {
		todos = toggleTodoCompletion(todos, id)
		renderTodos(
			todos,
			todosElement,
			totalCountElement,
			completedCountElement,
			setTodosToLocalStorage
		)
	} else if (target.classList.contains('button-edit')) {
		toggleEditMode(todoItem, todo)
	} else if (target.classList.contains('button-save')) {
		
		const editInput = todoItem.querySelector('.todo-edit-input')
		const newText = editInput.value.trim()

		if (newText && newText !== todo.text) {
			todos = updateTodo(todos, id, { text: newText })
		}
		renderTodos(
			todos,
			todosElement,
			totalCountElement,
			completedCountElement,
			setTodosToLocalStorage
		)
	} else if (target.classList.contains('button-cancel')) {
		
		renderTodos(
			todos,
			todosElement,
			totalCountElement,
			completedCountElement,
			setTodosToLocalStorage
		)
	} else if (target.classList.contains('button-delete')) {
		todos = deleteTodo(todos, id)
		renderTodos(
			todos,
			todosElement,
			totalCountElement,
			completedCountElement,
			setTodosToLocalStorage
		)
	}
})


document.addEventListener('DOMContentLoaded', () => {
	renderTodos(
		todos,
		todosElement,
		totalCountElement,
		completedCountElement,
		setTodosToLocalStorage
	)
	initParticles()
})



