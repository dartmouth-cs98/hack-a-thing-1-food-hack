// nav_category_item.js
import React from 'react';
import { browserHistory } from 'react-router';

const NavCategoryItem = (props) => {
  const currentClass = (props.categorySelected && props.category.id === props.categorySelected.id) ? 'selected-category nav-btn' : 'nav-btn';
  let linkUrl = '/'.concat(props.gradeSelected);
  linkUrl = linkUrl.concat('/').concat(props.category.id);
  return (
    <div className={currentClass} onClick={() => { browserHistory.push(linkUrl); }}>
      {props.category.name}
    </div>
  );
};

export default NavCategoryItem;
