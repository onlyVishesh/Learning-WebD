import { img_CDM_url } from "../config";

const RestaurantCards = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  totalRatingsString,
}) => {
  return (
    <div className="cards">
      <div className="card">
        <img
          src={img_CDM_url + cloudinaryImageId}
          alt={name}
          className="card-img"
        />
        <h2 className="restaurant-name">{name}</h2>
        <h4 className="description">{cuisines.join(", ")}.</h4>
        <h4 className="stars">
          {avgRating} Stars ({totalRatingsString})
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCards;
