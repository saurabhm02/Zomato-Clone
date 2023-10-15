import React from "react";
import "./ExploreCard.css";

const ExploreCard = ({ restaurant, i }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg =
    restaurant?.info?.image?.url || restaurant?.info?.o2FeaturedImage?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers || [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className={`card explore-card cur-po ${i < 3 ? "explore-card-first" : ""}`}>
      <img
        src={coverImg}
        className="card-img-top explore-card-image"
        alt={restaurant.info.name}
      />
      <div className="card-body">
        <div className="position-absolute end-0 bottom-0 p-2 bg-primary-bg text-light rounded" style={{ opacity: "0.8", backdropFilter: "blur(4px)" }}>
          {deliveryTime}
        </div>
        {proOff && (
          <div className="position-absolute start-0 bottom-4 p-2 bg-danger text-light rounded" style={{ fontSize: "14px" }}>
            {proOff}
          </div>
        )}
        {goldOff && (
          <div className="position-absolute start-0 bottom-4 p-2 bg-danger text-light rounded" style={{ fontSize: "14px" }}>
            {goldOff}
          </div>
        )}
        {discount && (
          <div className="position-absolute start-0 p-2 bg-primary text-light rounded" style={{ fontSize: "14px" }}>
            {discount}
          </div>
        )}
        <div className="d-flex justify-content-between p-2 res-row">
          <div className="card-title res-name" style={{ maxWidth: "200px", fontSize: "18px", fontWeight: "600", color: "var(--heading-text)" }}>
            {name}
          </div>
          {rating && (
            <div className="badge bg-success text-light res-rating" style={{ fontSize: "13px", borderRadius: "6px" }}>
              {rating} <i className="fi fi-sr-star" style={{ fontSize: "10px" }}></i>
            </div>
          )}
        </div>
        <div className="d-flex res-row">
          {cuisines.length && (
            <div className="res-cuisine" style={{ maxWidth: "56%", fontSize: "14px" }}>
              {cuisines.map((item, i) => (
                <span className="res-cuisine-tag" key={i}>
                  {item}
                  {i !== cuisines.length - 1 && ","}
                </span>
              ))}
            </div>
          )}
          {approxPrice && (
            <div className="text-muted res-price" style={{ fontSize: "14px" }}>
              {approxPrice}
            </div>
          )}
        </div>
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <hr className="card-separator" style={{ height: "1px", margin: "10px 0 5px", backgroundColor: "var(--border-white)" }} />
          <div className="d-flex align-items-center explore-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="card-text res-bottom-text" style={{ fontSize: "12px", maxWidth: "200px" }}>
              {bottomContainers[0]?.text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
