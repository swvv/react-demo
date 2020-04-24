import React, { Component } from 'react'
// import { Button } from 'antd'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          text: 'test',
          completed: false,
        },
      ],
      filter: 'all',
    }
    this.nextTodoId = 2
  }
  getVisibleTodos = () => {
    const currentFilter = this.state.filter
    return this.state.todos.filter((item) => {
      if (currentFilter === 'active') {
        return !item.completed
      } else if (currentFilter === 'completed') {
        return item.completed
      } else {
        return true
      }
    })
  }
  addTodo = (text) => {
    const todo = {
      id: this.nextTodoId++,
      text,
      completed: false,
    }
    const newTodos = [todo, ...this.state.todos]
    this.setState({
      todos: newTodos,
    })
  }
  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item
    })
    this.setState({
      todos: newTodos,
    })
  }
  setVisiblityFilter = (filter) => {
    this.setState({
      filter,
    })
  }
  render() {
    const todos = this.getVisibleTodos()
    // const { todos } = this.state
    const { filter } = this.props
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={todos} toggleTodo={this.toggleTodo} />
        <Footer filter={filter} setVisiblityFilter={this.setVisiblityFilter} />
      </div>
    )
  }
}

export default Todo
