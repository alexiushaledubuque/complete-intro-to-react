const React = require('react')
const ShowCard = require('./ShowCard')
const { object } = React.PropTypes
const Header = require('./Header')

// Spread Operator {...show} grabs all properties of show
// another format is class Search extends React.Component

// #21 this.setState({ searchTerm: searchTerm }) SAME AS this.setState({ searchTerm }) ES6 functionality

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm })
  },
  render () {
    return (
      <div className='container'>
        <Header 
          handleSearchTermChange={this.handleSearchTermChange} 
          searchTerm={this.state.searchTerm}
          showSearch 
        />
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
