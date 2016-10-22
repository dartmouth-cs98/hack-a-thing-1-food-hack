// activity_list_item.js
import React from 'react';

const ActivityListItem = (props) => {
  const currentClass = (props.activitySelected === props.activity) ? 'selected-activity activity-item' : 'activity-item';
  return (
    <li className={currentClass} onClick={() => props.onActivitySelect(props.activity)}>
      {props.activity}
    </li>
  );
};

export default ActivityListItem;
