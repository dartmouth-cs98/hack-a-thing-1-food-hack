// nav_category_item.js
import React from 'react';

const NavCategoryItem = (props) => {
  const currentClass = (props.catSelected && props.category.id === props.catSelected.id) ? 'selected-category nav-btn' : 'nav-btn';
  return (
    <div className={currentClass} onClick={() => props.onCategorySelect(props.category)}> {props.category.name} </div>
  );
};

export default NavCategoryItem;
