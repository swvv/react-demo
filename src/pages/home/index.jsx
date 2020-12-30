import React from 'react'
// import { Button } from 'antd'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      isToggleOn: false,
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({ date: new Date() })
  }
  handleClick = (d) => {
    console.log('this is:', this, d)
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }))
  }
  render() {
    return (
      <div>
        {/* <h1>Hello, world!</h1> */}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {/* <Button onClick={()=>{this.handleClick('aaa')}} type="primary">
          Click me
        </Button>
        <p>{this.state.isToggleOn ? 'ON' : 'OFF'}</p> */}
      </div>
    )
  }
}

function Home() {
  return (
    <h2>
      Home:
      <Clock></Clock>
    </h2>
  )
}
export default Home
