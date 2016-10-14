// index.js

//import React onto the page
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//add the style sheet onto the page
import './style.scss';

//import the Components



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>I am the App Component.</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
