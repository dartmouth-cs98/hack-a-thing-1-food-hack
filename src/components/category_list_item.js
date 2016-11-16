// category_list_item.js
import React from 'react';
import { Link } from 'react-router';

const CategoryListItem = (props) => {
  const currentClass = (props.categorySelected && props.category.id === props.categorySelected.id) ? 'selected-category cat-btn' : 'cat-btn';
  let linkUrl = '/'.concat(props.gradeSelected);
  linkUrl = linkUrl.concat('/').concat(props.category.id);
  return (
    <Link to={linkUrl} className={currentClass} >
      {props.category.name}
    </Link>
  );
};

export default CategoryListItem;
