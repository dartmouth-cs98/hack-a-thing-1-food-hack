// activity_list_item.js
import React from 'react';
import { Link } from 'react-router';

const ActivityListItem = (props) => {
  const currentClass = (props.activitySelected === props.activity) ? 'selected-activity activity-item' : 'activity-item';
  let linkUrl = '/'.concat(props.gradeSelected);
  linkUrl = linkUrl.concat('/').concat(props.categorySelected.id);
  linkUrl = linkUrl.concat('/').concat(props.activity.id);
  return (
    <Link to={linkUrl} className={currentClass} >
      {props.activity.name}
    </Link>
  );
};

export default ActivityListItem;
