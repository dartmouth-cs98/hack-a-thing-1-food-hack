// age_range_item.js
import React from 'react';
import { Link } from 'react-router';

const AgeRangeItem = (props) => {
  const url = '/'.concat(props.ageRange);
  return (
    <Link to={url}>
      <div id={props.ageRange} className="age-range-btn">
        {props.ageRange}
      </div>
    </Link>
  );
};

export default AgeRangeItem;
