import React from "react";
import ExploreCard from "./ExploreCard";


const ExploreSection = ({ restaurants, collectionName }) => {
    return (
        <div className="container mt-4">
          <div className="h3 collection-title">{collectionName}</div>
          <div className="row">
            {restaurants.map((restaurant, i) => (
              <div className="col-12 col-md-4 mb-4" key={i}>
                <ExploreCard restaurant={restaurant} i={i} />
              </div>
            ))}
          </div>
        </div>
      );
};

export default ExploreSection;
