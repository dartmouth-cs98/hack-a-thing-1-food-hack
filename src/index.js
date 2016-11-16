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
import NavBar from './components/nav_bar';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';


const App = (props) => {
  return (
    <div className={(!props.params.gradeSelected) ? 'grade-selection-container' : 'app-container'}>
      <NavBar path={props.location.pathname} gradeSelected={props.params.gradeSelected} />
      {props.children}
    </div>
  );
};

// render(<App />, document.getElementById('main'));
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GradeSelector} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/:gradeSelected" component={Home} />
      <Route path="/:gradeSelected/:categoryId" component={Home} />
      <Route path="/:gradeSelected/:categoryId/:activityId" component={Home} />
    </Route>
  </Router>
), document.getElementById('main'));
