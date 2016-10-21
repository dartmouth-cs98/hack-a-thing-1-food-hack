// activity_view.js
import React, { Component } from 'react';

class ActivityView extends Component {
  constructor(props) {
    super(props);

    this.chooseCategoryText = 'Please choose a category';
    this.chooseActivityText = 'Please choose an activity';
  }
  render() {
    if (!this.props.categorySelected) {
      return (
        <div className="category-not-selected"> {this.chooseCategoryText} </div>
      );
    } else if (!this.props.activitySelected) {
      return (
        <div className="activity-not-selected"> {this.chooseActivityText} </div>
      );
    }
    console.log('selectedCategory:');
    console.log(this.props.categorySelected);
    console.log('selected activity: ');
    console.log(this.props.activitySelected);
    return (
      <div className="activity-box">
        This will be an activity.
      </div>
    );
  }
}

export default ActivityView;
