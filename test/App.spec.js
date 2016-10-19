/* eslint-env mocha. Mocha is looking for .js files not .jsx */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')

// describe('Testing <Search /> component', () => {
//   it('should pass', () => {
//     expect(1 + 1 === 2).to.be.true
//   })
// })

// describe('Testing <Search /> component', () => {
//   it('should pass', () => {
//     expect(1 + 1).to.equal(5)
//   })
// })


// putting the 'x' in front of it comments out the test

// testing if the Search gets rendered - not it's children (Showcard)
describe('Testing <Search /> component', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    //console.log(wrapper.debug()) If I want to see all elements processed
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    // using mount verses shallow because shallow doesn't allow interaction
    // use shallow when you can; but, mount when you must. mount is slower
    const wrapper = mount(<Search />) 
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})


















