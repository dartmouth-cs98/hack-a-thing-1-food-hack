// age_selector.js
import React from 'react';
import AgeRangeItem from './age_range_item';

const AgeSelector = (props) => {
  const rangeButtons = props.ageRanges.map((range) => {
    return <AgeRangeItem ageRange={range} key={range} onAgeSelect={props.onAgeSelect} />;
  });

  return (
    <div>
      <p> Please select a grade range: </p>
      <div className="age-btn-container">
        {rangeButtons}
      </div>
    </div>
  );
};

export default AgeSelector;
