import * as React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react-lite'
import { makeObservable, observable, computed, action } from 'mobx'
import { Nav } from '@/pages/nav'
import { ComponentWrapper, ContentWrapper, PageWrapper } from '@/pages'

// 상태(state)를 정의하고 관찰 가능하게(observable) 만들기
class Todo {
	id = Math.random()
	title = ''
	finished = false

	constructor(title) {
		makeObservable(this, {
			title: observable,
			finished: observable,
			toggle: action,
		})
		this.title = title
	}

	// action을 이용한 state 업데이트
	toggle() {
		this.finished = !this.finished
	}
}

// 상태(state) 변화에 자동으로 응답하는 파생(derivation) 만들기
class TodoList {
	todos = []
	get unfinishedTodoCount() {
		return this.todos.filter((todo) => !todo.finished).length
	}
	constructor(todos) {
		makeObservable(this, {
			todos: observable,
			unfinishedTodoCount: computed,
		})
		this.todos = todos
	}
}

const TodoListView = observer(({ todoList }) => (
	<ComponentWrapper>
		<h1>TODO List</h1>
		<ul>
			{todoList.todos.map((todo) => (
				<TodoView todo={todo} key={todo.id} />
			))}
		</ul>
		Tasks left: {todoList.unfinishedTodoCount}
	</ComponentWrapper>
))

const TodoView = observer(({ todo }) => (
	<li>
		<input type="checkbox" checked={todo.finished} onClick={() => todo.toggle()} />
		{todo.title}
	</li>
))

const store = new TodoList([new Todo('Get Coffee'), new Todo('Write simpler code')])

export default function TodoPage() {
	return (
		<PageWrapper>
			<Nav />
			<ContentWrapper>
				<TodoListView todoList={store} />
			</ContentWrapper>
		</PageWrapper>
	)
}
