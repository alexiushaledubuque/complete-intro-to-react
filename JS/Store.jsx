const redux = require('redux')
const reactRedux = require('react-redux')
const { shows } = require('../public/data') 

const SET_SEARCH_TERM = 'setSearchTerm' // action all uppercase
const initialState = {
  searchTerm: '',
  shows
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM: 
      // const newState = {} // always since we're using SET_SEARCH_TERM - holds current value of state
      // Object.assign(newState, state, {searchTerm: action.value}) // newstate is updated with new value of state
      // return newState // MUST RETURN THE newState - MUST BE A PURE FUNCTION
      // you can also reduce to the reducer - SEE BELOW!!!
      return reduceSearchTerm(state, action)
    default:
      return state // MUST RETURN STATE TO REDUCER!!!!
  }
}

const reduceSearchTerm = (state=initialState, action) => {
  const newState = {}
    Object.assign(newState, state, {searchTerm: action.value})
    return newState
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' &&  typeof window.devToolsExtension !== 'undefined' 
    ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => { 
  return { 
    searchTerm: state.searchTerm,
    shows: state.shows
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchtoProps)

module.exports = { connector, store, rootReducer }
