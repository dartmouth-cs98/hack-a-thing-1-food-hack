// grade_selector.js
import React from 'react';
import GradeRangeItem from './grade_range_item';

const GradeSelector = (props) => {
  return (
    <div>
      <div className="grade-selection-title">
        <img src="/assets/grade_selection/grade-title.png" alt="Please select a grade range:" />
      </div>
      <div className="grade-btn-container">
        <GradeRangeItem gradeRange="K-2" image="/assets/grade_selection/balloon_k-2.png" />
        <GradeRangeItem gradeRange="3-5" image="/assets/grade_selection/balloon_3-5.png" />
        <GradeRangeItem gradeRange="6-8" image="/assets/grade_selection/balloon_6-8.png" />
      </div>
    </div>
  );
};

export default GradeSelector;
