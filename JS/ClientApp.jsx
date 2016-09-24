const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const { Router, Route, hashHistory } = require('react-router')

// this is a function expression for quick display to screen
// if I need to declare a variable (const) then add return back

const App = () => ( 
  <Router history ={hashHistory}>
    <Route path='/' component={Landing} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
