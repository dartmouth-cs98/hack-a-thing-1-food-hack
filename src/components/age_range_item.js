// age_range_item.js
import React from 'react';

const AgeRangeItem = (props) => {
  return (
    <div id={props.ageRange} className="age-range-btn" onClick={() => props.onAgeSelect(props.ageRange)}>
      <img className="age-range-img" src={props.image} alt={props.ageRange} />
    </div>
  );
};

export default AgeRangeItem;
