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
        <div className="activity-view category-not-selected"> {this.chooseCategoryText} </div>
      );
    } else if (!this.props.activitySelected) {
      return (
        <div className="activity-view activity-not-selected"> {this.chooseActivityText} </div>
      );
    } else {
      console.log('selectedCategory:');
      console.log(this.props.categorySelected);
      console.log('selected activity: ');
      console.log(this.props.activitySelected);
      return (
        <div className="hidden" />
      );
    }
  }
}

export default ActivityView;
