// Main .jsx for the app

const React = require('react')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')

// Destructuring { Router, Route, browserHistory }
const { Router, Route, IndexRoute, browserHistory } = require('react-router')
const { store } = require('./Store')
const { Provider } = require('react-redux')

// Function that returns a set of routes
const myRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)


// 'const App = () => ()' is a function expression for quick display to screen
// if I need to declare a variable (const) then add return syntax back
// Shift-CMD-P to install js packages
// Individual routes listed under Router
// IndexRoute is for nested routes - the path of it's parent
// Search is passed as the children

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App
