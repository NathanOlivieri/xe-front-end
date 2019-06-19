import React from 'react';
import { StateProvider, mainReducer } from './State/state'
import { initialState } from './State/initialState'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import 'typeface-roboto'
import 'typeface-suranna'

const App = () => (
    <StateProvider initialState={ initialState } reducer={ mainReducer }>
      <Router>
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/services' component={ Services } />
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </Router>
    </StateProvider>
)

export default App;
