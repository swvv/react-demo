import React, { Component } from 'react'
import './App.styl'
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Table from './pages/table/table'
import Form from './pages/table/form'
import About from './pages/about/about'
import Game from './pages/game/game'
import Todo from './pages/todo/todoIndex'
function Home() {
  return <h2>Home</h2>
}
class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    activeStyle={{ color: 'pink' }}
                    to="/"
                    className="11"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    activeStyle={{ color: 'pink' }}
                    to="/table"
                    className="11"
                  >
                    Table
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    activeStyle={{ color: 'pink' }}
                    to="/about"
                    className="11"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    activeStyle={{ color: 'pink' }}
                    to="/todo"
                    className="11"
                  >
                    Todo
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    activeStyle={{ color: 'pink' }}
                    to="/game"
                    className="11"
                  >
                    Game
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <div className="container">
            <Switch>
              <Route path="/table">
                <Table
                  characterData={characters}
                  removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
              </Route>
              <Route path="/about" pattern="/about">
                <About />
              </Route>
              <Route path="/todo" pattern="/todo">
                <Todo />
              </Route>
              <Route path="/game" pattern="/game">
                <Game />
              </Route>
              <Route path="/" pattern="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
