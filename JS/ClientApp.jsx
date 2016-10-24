// Main .jsx for the app

const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')

// Destructuring { Router, Route, hashHistory }
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { shows } = require('../public/data')
const { store } = require('./Store')
const { Provider } = require('react-redux')


// 'const App = () => ()' is a function expression for quick display to screen
// if I need to declare a variable (const) then add return syntax back
// Shift-CMD-P to install js packages
// Individual routes listed under Router
// IndexRoute is for nested routes - the path of it's parent
// Search is passed as the children

const App = React.createClass({
  assignShow (nextState, replace) {
    // notes are incorrect
    const showArray = shows.filter( (show) => show.imdbID === nextState.params.id )

    if (showArray.length < 1) {
      return replace('/')
    }
     
    // I have 2 objects, I want to take all of the properties in showArray and put them into nextState.params
    Object.assign(nextState.params, showArray[0])
    return nextState
  },
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} shows={shows} />
            <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

// ReactDom.render is required in the main app file

ReactDOM.render(<App />, document.getElementById('app'))
