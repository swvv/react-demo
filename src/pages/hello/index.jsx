import React, { Component } from 'react'

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}
function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  const num = props.num
  // if (num > 0) {
  //   return null
  // }
  const msgList = unreadMessages.map((item, idx) => 
    <li key={idx}>{item}</li>
  )
  return (
    <div>
      <h1>Hello!</h1>
      <div>{num && <h2> You have {num} unread messages. </h2>}</div>
      <ul>
        {msgList}
      </ul>
    </div>
  )
}
class Hello extends Component {
  componentDidMount() {}
  render() {
    const messages = ['React', 'Re: React', 'Re:Re: React']
    const num = 1
    return (
      <>
        <Mailbox unreadMessages={messages} num={num}></Mailbox>
        <Greeting isLoggedIn={true} />
      </>
    )
  }
}

export default Hello
