const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

// Spread Operator {...show} grabs all properties of show

const Search = (props) => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

module.exports = Search
