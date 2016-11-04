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
    const activityId = (this.props.routes.length !== 3) ? null : (!this.props.params.splat) ? this.props.routes[2].path : this.props.params.splat;
    const activitySelected = (!categorySelected) ? null : categorySelected.activities[activityId];
    return (
      <div className="home-container">
        <p> the selected grade range is {gradeSelected} </p>
        <CategoryList
          gradeSelected={gradeSelected}
          categories={this.activityData}
          categorySelected={categorySelected}
        />
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
        {this.props.children}
      </div>
    );
  }
}


export default Home;
