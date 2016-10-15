const React = require('react')

// Children allows you to get the passed in components

const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
