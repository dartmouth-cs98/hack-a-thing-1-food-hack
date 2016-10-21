// age_selector.js
import React from 'react';
import AgeRangeItem from './age_range_item';

const AgeSelector = (props) => {
  return (
    <div>
      <div className="grade-selection-title">
        <img src="/assets/grade-title.png" alt="Please select a grade range:" />
      </div>
      <div className="age-btn-container">
        <AgeRangeItem ageRange="K-2" image="/assets/balloon_k-2.png" onAgeSelect={props.onAgeSelect} />
        <AgeRangeItem ageRange="3-5" image="/assets/balloon_3-5.png" onAgeSelect={props.onAgeSelect} />
        <AgeRangeItem ageRange="6-8" image="/assets/balloon_6-8.png" onAgeSelect={props.onAgeSelect} />
      </div>
    </div>
  );
};

export default AgeSelector;
