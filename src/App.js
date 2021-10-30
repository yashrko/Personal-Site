import Head from './Head'
import Middle from './Middle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Skill from './Skill'
import Other from './Other'
import React, { useState } from 'react'
import MyContext from './MyContext'
function App() {
  const [darkmode, setdarkmode] = useState(false)
  return (
    <MyContext.Provider
      value={{ setdarkmode: setdarkmode, darkmode: darkmode }}
    >
      <div className={darkmode ? 'outer-bg-dark' : 'outer-bg-light'}>
        <Router>
          <Switch>
            <Route exact path='/Other'>
              <Other />
            </Route>
            <Route exact path='/Personal-Site/Other'>
              <Other />
            </Route>
            <Head />
          </Switch>
          <Route exact path='/Personal-Site'>
            <Middle />
          </Route>
          <Route path='/skills'>
            <Skill />
          </Route>
        </Router>
      </div>
    </MyContext.Provider>
  )
}
export default App
