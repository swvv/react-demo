import React, { Component } from 'react'
import { Button } from 'antd'
export default class Footer extends Component {
  render() {
    const { filter, setVisiblityFilter } = this.props
    return (
      <div>
        <p>Show:</p>
        <Button
          disabled={filter === 'all'}
          onClick={() => setVisiblityFilter('all')}
        >
          All
        </Button>
        <Button
          disabled={filter === 'active'}
          onClick={() => setVisiblityFilter('active')}
        >
          Active
        </Button>
        <Button
          disabled={filter === 'completed'}
          onClick={() => setVisiblityFilter('completed')}
        >
          Completed
        </Button>
      </div>
    )
  }
}
