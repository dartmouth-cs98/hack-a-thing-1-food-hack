// grade_selector.js
import React from 'react';
import GradeRangeItem from './grade_range_item';

const GradeSelector = (props) => {
  return (
    <div>
      <div className="grade-selection-title">
        <img src="/assets/grade-title.png" alt="Please select a grade range:" />
      </div>
      <div className="grade-btn-container">
        <GradeRangeItem gradeRange="K-2" image="/assets/balloon_k-2.png" onGradeSelect={props.onGradeSelect} />
        <GradeRangeItem gradeRange="3-5" image="/assets/balloon_3-5.png" onGradeSelect={props.onGradeSelect} />
        <GradeRangeItem gradeRange="6-8" image="/assets/balloon_6-8.png" onGradeSelect={props.onGradeSelect} />
      </div>
    </div>
  );
};

export default GradeSelector;
