// age_range_item.js
import React from 'react';

const AgeRangeItem = (props) => {
  return (
    <button type="button" id={props.ageRange} className="age-range-btn" onClick={() => props.onAgeSelect(props.ageRange)}> {props.ageRange} </button>
  );
};

export default AgeRangeItem;
