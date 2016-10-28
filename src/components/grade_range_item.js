// grade_range_item.js
import React from 'react';
import { Link } from 'react-router';

const GradeRangeItem = (props) => {
  const url = '/'.concat(props.gradeRange);
  return (
    <Link to={url} id={props.gradeRange} className="grade-range-btn" >
      <img className="grade-range-img" src={props.image} alt={props.gradeRange} />
    </Link>
  );
};

export default GradeRangeItem;
