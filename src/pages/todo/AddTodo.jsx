import React, { Component } from 'react'
import { Input, Button } from 'antd'
export default class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }
  render() {
    return (
      <div>
        <Input value={this.state.text} onChange={this.handleChange}></Input>
        <Button type="primary" onClick={this.handleClick}>
          Add
        </Button>
      </div>
    )
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }
  handleClick = () => {
    this.props.addTodo(this.state.text)
  }
}
