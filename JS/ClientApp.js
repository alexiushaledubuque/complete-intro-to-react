var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	render () {
		return (
			div(null, 
				h1(null, "Checkout this other thing.")
			)
		)
	}
})

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  
  div(null,
  	MyTitleFact(null),
  	React.createElement(MyTitle, null),
  	React.createElement(MyTitle, null)
  )
)


ReactDOM.render(MyFirstComponent, document.getElementById('app'))