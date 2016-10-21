// index.js

// import React onto the page
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

// add the style sheet onto the page
import './style.scss';

// import the Components
import AgeSelector from './components/age_selector';
import DisabilityList from './components/disability_list';
import NavBar from './components/nav_bar';
import ActivityView from './components/activity_view';

// import the activity/category JSON data object from static JS file
import activityData from '../assets/activity_data';


class App extends Component {
  constructor(props) {
    super(props);

    this.activityData = activityData;
    this.ageRanges = ['K-2', '3-5', '6-8'];
    this.state = {
      ageSelected: null,
      categorySelected: null,
      activitySelected: null,
    };
  }
  render() {
    if (!this.state.ageSelected) {
      return (
        <div>
          <AgeSelector ageRanges={this.ageRanges} onAgeSelect={ageSelected => this.setState({ ageSelected })} />
        </div>
      );
    }

    return (
      <div>
        <p> the selected age range is {this.state.ageSelected} </p>
        <NavBar
          categories={this.activityData}
          catSelected={this.state.categorySelected}
          onCategorySelect={categorySelected => this.setState({ categorySelected: categorySelected, activitySelected: null })}
        />
        <ActivityView
          categorySelected={this.state.categorySelected}
          activitySelected={this.state.activitySelected}
        />
        <DisabilityList
          categorySelected={this.state.categorySelected}
          activitySelected={this.state.activitySelected}
          onActivitySelect={activitySelected => this.setState({ activitySelected })}
        />
      </div>
    );
  }
}

// render(<App />, document.getElementById('main'));
render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={AgeSelector} />
      <Route path="/:ageSelected" component={App}>
        <Route path="/:categorySelected" component={App}>
          <Route path="/:activitySelected" component={App} />
        </Route>
      </Route>
    </Route>
  </Router>
), document.getElementById('main'));
