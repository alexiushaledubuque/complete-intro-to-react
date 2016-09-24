const React = require('react')
const ReactDOM = require('react-dom')

// this is a function expression for quick display to screen
// if I need to declare a variable (const) then add return back

const App = () => ( 
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <button className='browse-all'> or Browse All</button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
