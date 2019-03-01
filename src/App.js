import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './component/index.jsx'
import About from './component/about.jsx'
import Welcome from './component/welcome.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  // 不建议在render函数中做this转换
  // 建议在constructor中做，this.handleClick = this.handleClick.bind(this)
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index}></Route>
          <Route path="/about/" component={About}></Route>
          <Route path="/users/" component={Welcome}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
