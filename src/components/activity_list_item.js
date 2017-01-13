// activity_list_item.js
import React from 'react';
import { browserHistory } from 'react-router';

const ActivityListItem = (props) => {
  const currentClass = (props.activitySelected === props.activity) ? 'selected-activity activity-item' : 'activity-item';
  let linkUrl = '/'.concat(props.gradeSelected);
  linkUrl = linkUrl.concat('/').concat(props.categorySelected.id);
  linkUrl = linkUrl.concat('/').concat(props.activity.id);
  return (
    <li className={currentClass} onClick={() => { browserHistory.push(linkUrl); }}>
      {props.activity.name}
    </li>
  );
};

export default ActivityListItem;
