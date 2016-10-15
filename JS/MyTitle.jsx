// File is no longer being used

const React = require('react')
const div = React.DOM.div
const h1 = React.DOM.h1

const MyTitle = React.createClass({
  render () {
    const style = {color: this.props.color} // Object inside of the expression style blow
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
