import Head from './Head'
import Middle from './Middle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Skill from './Skill'
import Other from './Other'
function App() {
  return (
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
  )
}

export default App
