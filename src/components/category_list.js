// category_list.js
import React from 'react';
import CategoryListItem from './category_list_item';

const CategoryList = (props) => {
  const categoryButtons = Object.keys(props.categories).map((key) => {
    const category = props.categories[key];
    return (
      <CategoryListItem
        category={category}
        categorySelected={props.categorySelected}
        key={category.name}
        gradeSelected={props.gradeSelected}
      />
    );
  });

  return (
    <div className="cat-list">
      <div className="top-cat cat-row">
        {categoryButtons.splice(0, categoryButtons.length / 2)}
      </div>
      <div className="bottom-cat cat-row">
        {categoryButtons}
      </div>
    </div>
  );
};

export default CategoryList;
