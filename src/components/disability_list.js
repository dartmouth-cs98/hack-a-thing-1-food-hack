// disability_list.js
import React from 'react';
import DisabilityListItem from './disability_list_item';

const DisabilityList = (props) => {
  if (!props.categorySelected) {
    return <div className="hidden" />;
  }
  const listItems = props.categorySelected.disabilities.map((disability) => {
    return (
      <DisabilityListItem
        key={disability}
        activitySelected={props.activitySelected}
        onActivitySelect={props.onActivitySelect}
        disability={disability}
      />
    );
  });
  return (
    <ul className="activity-list">
      {listItems}
    </ul>
  );
};

export default DisabilityList;
