// activity_list.js
import React from 'react';
import ActivityListItem from './activity_list_item';

const ActivityList = (props) => {
  if (!props.categorySelected) {
    return <div className="hidden" />;
  }
  const listItems = Object.keys(props.categorySelected.activities).map((activity_id) => {
    const activity = props.categorySelected.activities[activity_id];
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
    <ul className="activity-list">
      {listItems}
    </ul>
  );
};

export default ActivityList;
