// index.js

// import React onto the page
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// add the style sheet onto the page
import './style.scss';

// import the Components
import GradeSelector from './components/grade_selector';
import DisabilityList from './components/disability_list';
import NavBar from './components/nav_bar';
import ActivityView from './components/activity_view';

// import the activity/category JSON data object from static JS file
import activityData from '../assets/activity_data';


class App extends Component {
  constructor(props) {
    super(props);

    this.activityData = activityData;
    this.gradeRanges = ['K-2', '3-5', '6-8'];
    this.state = {
      gradeSelected: null,
      categorySelected: null,
      activitySelected: null,
    };
  }
  render() {
    if (!this.state.gradeSelected) {
      return (
        <div className="app-container">
          <GradeSelector gradeRanges={this.gradeRanges} onGradeSelect={gradeSelected => this.setState({ gradeSelected })} />
        </div>
      );
    }

    return (
      <div className="app-container">
        <p> the selected grade range is {this.state.gradeSelected} </p>
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

ReactDOM.render(<App />, document.getElementById('main'));
