import React from "react";

function CategoryFilter({categories, onSelectCategory, selectedCategory}) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory? "selected" : null;
    return (<button className={className} key={category} onClick={()=>onSelectCategory(category)} >
  {category}
  </button>)})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
