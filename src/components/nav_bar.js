// nav_bar.js
import React from 'react';
import NavCategoryItem from './nav_category_item';

const NavBar = (props) => {
  // console.log(props);
  let keys = [];
  let key = '';
  for (key in props.categories) {
    if (props.categories.hasOwnProperty(key)) {
      keys = keys.concat(key);
    }
  }
  const categoryButtons = keys.map((key) => {
    const category = props.categories[key];
    return (
      <NavCategoryItem
        category={category}
        categorySelected={props.categorySelected}
        key={category.name}
        gradeSelected={props.gradeSelected}
      />
    );
  });

  return (
    <div className="nav-bar">
      <div className="top-nav nav-row">
        {categoryButtons[0]}
        {categoryButtons[1]}
        {categoryButtons[2]}
        {categoryButtons[3]}
      </div>
      <div className="bottom-nav nav-row">
        {categoryButtons[4]}
        {categoryButtons[5]}
        {categoryButtons[6]}
        {categoryButtons[7]}
      </div>
    </div>
  );
};

export default NavBar;
