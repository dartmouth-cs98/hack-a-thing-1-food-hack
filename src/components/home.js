// home.js

// import React onto the page
import React, { Component } from 'react';

// import the Components
import ActivityList from './activity_list';
import CategoryList from './category_list';
import ActivityView from './activity_view';

// import the activity/category JSON data object from static JS file
import activityData from '../../assets/activity_data';


class Home extends Component {
  constructor(props) {
    super(props);
    this.activityData = activityData;
  }
  render() {
    const gradeSelected = this.props.params.gradeSelected;
    const categorySelected = this.activityData[this.props.params.categoryId];
    const activitySelected = this.props.params.activitySelected;
    return (
      <div className="home-container">
        <CategoryList
          gradeSelected={gradeSelected}
          categories={this.activityData}
          categorySelected={categorySelected}
        />
        <p> the selected grade range is {gradeSelected} </p>
        <ActivityView
          gradeSelected={gradeSelected}
          categorySelected={categorySelected}
          activitySelected={activitySelected}
        />
        <ActivityList
          gradeSelected={gradeSelected}
          categorySelected={categorySelected}
          activitySelected={activitySelected}
        />
      </div>
    );
  }
}


export default Home;
