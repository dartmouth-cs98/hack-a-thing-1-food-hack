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
        <div className="categoryNotSelected"> {this.chooseCategoryText} </div>
      );
    } else if (!this.props.activitySelected) {
      return (
        <div className="activityNotSelected"> {this.chooseActivityText} </div>
      );
    }
    console.log('selectedCategory:');
    console.log(this.props.categorySelected);
    console.log('selected activity: ');
    console.log(this.props.activitySelected);
    return (
      <div className="activityBox">
        This will be an activity.
      </div>
    );
  }
}

export default ActivityView;
