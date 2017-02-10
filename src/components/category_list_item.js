// category_list_item.js
import React from 'react';
import { Link } from 'react-router';

const CategoryListItem = (props) => {
  const currentId = (props.categorySelected && props.category.id === props.categorySelected.id) ? 'selected-category' : '';
  let linkUrl = '/'.concat(props.gradeSelected);
  linkUrl = linkUrl.concat('/').concat(props.category.id);
  return (
    <Link to={linkUrl} className="cat-btn" id={currentId} >
      {props.category.name}
    </Link>
  );
};

export default CategoryListItem;
