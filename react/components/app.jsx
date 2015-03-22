/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({

  // We initialise its state by using the `props` that were passed in when it
  // was first rendered. We also want the button to be disabled until the
  // component has fully mounted on the DOM
  getInitialState: function() {
    return {items: this.props.items, disabled: true}
  },

  // Once the component has been mounted, we can enable the button
  componentDidMount: function() {
    this.setState({disabled: false})
  },

  // Then we just update the state whenever its clicked by adding a new item to
  // the list - but you could imagine this being updated with the results of
  // AJAX calls, etc
  handleClick: function() {
    this.setState({
      items: this.state.items.concat('Message ' + this.state.items.length)
    })
  },

  render: function() {
    return(
      <div>
        <button onClick={this.handleClick} disabled={this.state.disabled}>Add Item</button>
        <ul>
          {this.state.items.map(function(item) {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    )
  },
})
