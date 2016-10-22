// grade_range_item.js
import React from 'react';

const GradeRangeItem = (props) => {
  return (
    <div id={props.gradeRange} className="grade-range-btn" >
      <img className="grade-range-img" src={props.image} alt={props.gradeRange} onClick={() => props.onGradeSelect(props.gradeRange)} />
    </div>
  );
};

export default GradeRangeItem;
