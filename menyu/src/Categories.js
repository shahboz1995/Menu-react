import React from "react";

const Categories = ({ allCategories, filterItems }) => {
  return (
    <div className="btn-container">
      {allCategories.map((item, idx) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={idx}
            onClick={() => filterItems(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
