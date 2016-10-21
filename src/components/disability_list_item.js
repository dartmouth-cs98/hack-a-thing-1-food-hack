// disability_list_item.js
import React from 'react';

const DisabilityListItem = (props) => {
  const currentClass = (props.activitySelected === props.disability) ? 'selectedActivity' : 'activityItem';
  return (
    <li className={currentClass} onClick={() => props.onActivitySelect(props.disability)}>
      {props.disability}
    </li>
  );
};

export default DisabilityListItem;
