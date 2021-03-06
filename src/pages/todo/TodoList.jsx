import React, { Component } from 'react'
import Todo from './Todo'
export default class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props
    return (
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => {
                  toggleTodo(todo.id)
                }}
              ></Todo>
            )
          })}
        </ul>
      </div>
    )
  }
}
