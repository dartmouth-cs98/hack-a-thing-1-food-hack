// activity_list.js
import React from 'react';
import ActivityListItem from './activity_list_item';

const ActivityList = (props) => {
  if (!props.categorySelected) {
    return <div className="hidden" />;
  }
  const listItems = props.categorySelected.activities.map((activity) => {
    return (
      <ActivityListItem
        key={activity}
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
