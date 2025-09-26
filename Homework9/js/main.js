const formElement = document.querySelector('.form')
const inputElement = document.querySelector('.input')
const todosElement = document.querySelector('.todos')
const totalCountElement = document.querySelector('.total-count')
const completedCountElement = document.querySelector('.completed-count')

let todos = []
let nextId = 1

function createTodoElement(todo) {
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

function toggleEditMode(todoItem, todo) {
	const isEditing = todoItem.classList.contains('editing')

	if (isEditing) {
		const editInput = todoItem.querySelector('.todo-edit-input')
		const newText = editInput.value.trim()

		if (newText && newText !== todo.text) {
			todo.text = newText
			updateTodoInArray(todo.id, todo)
		}

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

		todoItem.classList.remove('editing')
	} else {
		todoItem.innerHTML = `
                    <input class="todo-edit-input" type="text" value="${todo.text}">
                    <div class="todo-actions">
                        <button class="button button-save" title="Сохранить">✓</button>
                        <button class="button button-cancel" title="Отменить">✕</button>
                    </div>
                `

		todoItem.classList.add('editing')

		const editInput = todoItem.querySelector('.todo-edit-input')
		editInput.focus()
		editInput.select()
	}

	return !isEditing
}

function handleCreateTodo(text) {
	const newTodo = {
		id: nextId++,
		text: text,
		completed: false,
	}

	todos.push(newTodo)
	return newTodo
}

function updateTodoInArray(id, updatedTodo) {
	const index = todos.findIndex(todo => todo.id === id)
	if (index !== -1) {
		todos[index] = updatedTodo
	}
}

function handleDeleteTodo(id) {
	todos = todos.filter(todo => todo.id !== id)
}

function toggleTodoCompletion(id) {
	const todo = todos.find(todo => todo.id === id)
	if (todo) {
		todo.completed = !todo.completed
		return todo
	}
	return null
}

function updateStats() {
	const total = todos.length
	const completed = todos.filter(todo => todo.completed).length

	totalCountElement.textContent = total
	completedCountElement.textContent = completed
}

function renderTodos() {
	todosElement.innerHTML = ''

	if (todos.length === 0) {
		const emptyState = document.createElement('div')
		emptyState.className = 'empty-state'
		emptyState.textContent = 'Задач пока нет. Добавьте первую задачу!'
		todosElement.appendChild(emptyState)
		updateStats()
		return
	}

	todos.forEach(todo => {
		const todoElement = createTodoElement(todo)
		todosElement.appendChild(todoElement)
	})

	updateStats()
}

formElement.addEventListener('submit', function (event) {
	event.preventDefault()

	const text = inputElement.value.trim()
	if (text) {
		const newTodo = handleCreateTodo(text)
		renderTodos()
		inputElement.value = ''
		inputElement.focus()
	}
})

todosElement.addEventListener('click', function (event) {
	const target = event.target
	const todoItem = target.closest('.todo')

	if (!todoItem) return

	const id = parseInt(todoItem.dataset.id)
	const todo = todos.find(t => t.id === id)

	if (!todo) return

	if (target.classList.contains('button-complete')) {
		toggleTodoCompletion(id)
		renderTodos()
	} else if (target.classList.contains('button-edit')) {
		toggleEditMode(todoItem, todo)
	} else if (target.classList.contains('button-save')) {
		const editInput = todoItem.querySelector('.todo-edit-input')
		const newText = editInput.value.trim()

		if (newText && newText !== todo.text) {
			todo.text = newText
		}

		renderTodos()
	} else if (target.classList.contains('button-cancel')) {
		renderTodos()
	} else if (target.classList.contains('button-delete')) {
		handleDeleteTodo(id)
		renderTodos()
	}
})

window.addEventListener('DOMContentLoaded', function () {
	handleCreateTodo('Изучить JavaScript')
	handleCreateTodo('Решить задачу')
	handleCreateTodo('Скинуть отчёт ')
	renderTodos()
})

particlesJS('particles-js', {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: '#ffffff',
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000',
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: 'img/github.svg',
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 6,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: true,
				mode: 'grab',
			},
			onclick: {
				enable: true,
				mode: 'push',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 140,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
})

/* ---- stats.js config ---- */

var count_particles, stats, update
stats = new Stats()
stats.setMode(0)
stats.domElement.style.position = 'absolute'
stats.domElement.style.left = '0px'
stats.domElement.style.top = '0px'
document.body.appendChild(stats.domElement)
count_particles = document.querySelector('.js-count-particles')
update = function () {
	stats.begin()
	stats.end()
	if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
		count_particles.innerText = window.pJSDom[0].pJS.particles.array.length
	}
	requestAnimationFrame(update)
}
requestAnimationFrame(update)