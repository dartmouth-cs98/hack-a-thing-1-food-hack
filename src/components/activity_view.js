// activity_view.js
import React, { Component } from 'react';

class ActivityView extends Component {
  constructor(props) {
    super(props);

    this.chooseCategory = (
      <div className="activity-view category-not-selected">
        <img className="pick-category" src="/assets/pick_category.png" alt="Please choose a category" />
      </div>
    );
    this.chooseActivity = (
      <div className="activity-view activity-not-selected">
        <img className="pick-activity" src="/assets/pick_activity.png" alt="Please choose an activity" />
      </div>
    );
  }
  render() {
    if (!this.props.categorySelected) {
      return this.chooseCategory;
    } else if (!this.props.activitySelected) {
      return this.chooseActivity;
    } else {
      console.log('selectedCategory:');
      console.log(this.props.categorySelected);
      console.log('selected activity: ');
      console.log(this.props.activitySelected);
      return (
        <div className="activity-view">
          <iframe className="activity-frame" src={this.props.activitySelected.url} />
        </div>
      );
    }
  }
}

export default ActivityView;
