// index.js

// import React onto the page
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// add the style sheet onto the page
import './style.scss';

// import the Components
import GradeSelector from './components/grade_selector';
import Home from './components/home';


const App = (props) => {
  return (
    <div className="app-container">
      {props.children}
    </div>
  );
};

// render(<App />, document.getElementById('main'));
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GradeSelector} />
      <Route path="/:gradeSelected" component={Home} />
      <Route path="/:gradeSelected/:categoryId" component={Home} />
      <Route path="/:gradeSelected/:categoryId/:activityId" component={Home} />
    </Route>
  </Router>
), document.getElementById('main'));
