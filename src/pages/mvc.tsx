import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { Nav } from '@/pages/nav'

const inter = Inter({ subsets: ['latin'] })

interface Todo {
	id: number
	text: string
	completed: boolean
}

class TodoModel {
	private todos: Todo[]
	constructor() {
		this.todos = [
			{ id: 1, text: 'Todo 1', completed: false },
			{ id: 2, text: 'Todo 2', completed: true },
			{ id: 3, text: 'Todo 3', completed: false },
		]
	}

	getTodos() {
		return this.todos
	}

	addTodo(todo: string) {
		const newTodo: Todo = { id: Date.now(), text: todo, completed: false }
		this.todos.push(newTodo)
	}

	toggleComplete(id: number) {
		this.todos = this.todos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo,
		)
	}
}

// View
function TodoList({ todos, toggleComplete }) {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={() => toggleComplete(todo.id)}
					/>
					<span>{todo.text}</span>
				</li>
			))}
		</ul>
	)
}

function AddTodoForm({ addTodo }) {
	const [todo, setTodo] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		addTodo(todo)
		setTodo('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button type="submit">Add Todo</button>
		</form>
	)
}

// Controller
function TodoController() {
	const [todos, setTodos] = useState<Todo[]>([])

	useEffect(() => {
		const model = new TodoModel()
		setTodos(model.getTodos())
	}, [])

	const addTodo = (todo) => {
		const model = new TodoModel()
		model.addTodo(todo)
		setTodos(model.getTodos())
	}

	const toggleComplete = (id) => {
		const model = new TodoModel()
		model.toggleComplete(id)
		setTodos(model.getTodos())
	}

	return (
		<>
			<h1>MVC Sample</h1>
			<TodoList todos={todos} toggleComplete={toggleComplete} />
			<AddTodoForm addTodo={addTodo} />
		</>
	)
}

export default function Home() {
	return (
		<>
			<Nav />
			<TodoController />
		</>
	)
}
