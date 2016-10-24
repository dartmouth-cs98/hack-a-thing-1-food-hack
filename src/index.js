// index.js

// import React onto the page
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// add the style sheet onto the page
import './style.scss';

// import the Components
import GradeSelector from './components/grade_selector';
import Home from './components/home';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        {this.props.children}
      </div>
    );
  }
}

// render(<App />, document.getElementById('main'));
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GradeSelector} />
      <Route path="/:gradeSelected" component={Home} />
      <Route path="/:gradeSelected/:categoryId" component={Home} />
      <Route path="/:gradeSelected/:categoryId/:activitySelected" component={Home} />
    </Route>
  </Router>
), document.getElementById('main'));
