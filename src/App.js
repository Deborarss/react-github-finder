import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import User from './components/User'
import Alert from './components/Alert'
import Home from './components/Home'
import About from './components/pages/About'
import NotFound from './components/NotFound'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css'

const App = () => {

    return (
      <GithubState>
        <AlertState>
            <Router>
              <div className="App">
                <header className="App-header">
                  <Navbar title="Github Finder" icon="fab fa-github" />
                </header>
                <section className="App-user container">
                  <Alert />
                  <Switch>
                    <Route 
                      exact 
                      path="/"
                      component={Home}  
                    />
                    <Route 
                      exact 
                      path='/sobre' 
                      component={About} />
                    <Route
                      exact 
                      path={`/user/:login`}
                      component={User}
                    />
                    <Route component={NotFound} />
                  </Switch>
                </section>
              </div>
          </Router>
        </AlertState> 
      </GithubState>
    )
  }

  export default App