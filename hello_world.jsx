const React = require('react');
const ReactDOM = require('react-dom');

let MyComponent = React.createClass({
  render() {
    return (
      <div>"hello world"</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<MyComponent/>, document.getElementById("hello"));
});
