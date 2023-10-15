import React from "react";
import FilterItem from "./FilterItem";


const Filters = ({ filterList }) => {
  return (
    <div className="container py-4">
      <div className="row filters">
        {filterList &&
          filterList.map((filter) => {
            return (
              <div className="col-12 col-md-6" key={filter.id}>
                <FilterItem filter={filter} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Filters;
