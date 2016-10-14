// nav_bar.js
import React from 'react';
import NavCategoryItem from './nav_category_item';

const NavBar = (props) => {
  // console.log(props);
  const categoryButtons = props.categories.map((category) => {
    return <NavCategoryItem category={category} catSelected={props.catSelected} key={category.name} onCategorySelect={props.onCategorySelect} />;
  });

  return (
    <div id="nav-bar">
      <div id="top-nav" className="nav-row">
        {categoryButtons[0]}
        {categoryButtons[1]}
        {categoryButtons[2]}
        {categoryButtons[3]}
      </div>
      <div id="bottom-nav" className="nav-row">
        {categoryButtons[4]}
        {categoryButtons[5]}
        {categoryButtons[6]}
        {categoryButtons[7]}
      </div>
    </div>
  );
};

export default NavBar;
