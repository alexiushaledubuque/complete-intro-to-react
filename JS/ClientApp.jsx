// Main .jsx for the app

const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')

// Destructuring { Router, Route, hashHistory }
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const Search = require('./Search')
const Layout = require('./Layout')

// 'const App = () => ()' is a function expression for quick display to screen
// if I need to declare a variable (const) then add return syntax back
// Shift-CMD-P to install js packages
// Individual routes listed under Router
// IndexRoute is for nested routes - the path of it's parent
// Search is passed as the children

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

// ReactDom.render is required in the main app file

ReactDOM.render(<App />, document.getElementById('app'))
