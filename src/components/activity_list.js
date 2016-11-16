// activity_list.js
import React from 'react';
import ActivityListItem from './activity_list_item';

const ActivityList = (props) => {
  if (!props.categorySelected) {
    return <div className="hidden" />;
  }
  const listItems = Object.keys(props.categorySelected.activities).map((activityId) => {
    const activity = props.categorySelected.activities[activityId];
    return (
      <ActivityListItem
        key={activity.id}
        activitySelected={props.activitySelected}
        categorySelected={props.categorySelected}
        gradeSelected={props.gradeSelected}
        activity={activity}
      />
    );
  });
  return (
    <div className="activity-list">
      {listItems}
    </div>
  );
};

export default ActivityList;
