// nav_category_item.js
import React from 'react';

const NavCategoryItem = (props) => {
  // console.log(props.category.id + ', ' + props.catSelected);
  if (!props.catSelected || props.category.id !== props.catSelected.id) {
    return (
      <div className="nav-btn" onClick={() => props.onCategorySelect(props.category)}> {props.category.name} </div>
    );
  }
  return (
    <div id="selected-category" className="nav-btn" onClick={() => props.onCategorySelect(props.category)}> {props.category.name} </div>
  );
};

export default NavCategoryItem;
