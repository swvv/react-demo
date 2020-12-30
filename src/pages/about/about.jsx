import React, { Component } from 'react'

class About extends Component {
  state = {
    data: [],
  }
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = 'http://universities.hipolabs.com/search?name=middle'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }
  render() {
    const { data } = this.state
    const result = data.map((item, index) => {
      return <li key={index}>
        <p>{item.country}</p>
        <p>{item.name}</p>
      </li>
    })
    return (
      <div>
        <h2>About</h2>
        <ul>{result}</ul>
      </div>
    )
  }
}

export default About
