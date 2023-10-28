import { img_CDM_url } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCards = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  totalRatingsString,
  sla,
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
        <div className="more-detail">
          <h4 className="stars">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#ffffff" }}
              size="xs"
            />
            {avgRating} ({totalRatingsString})
          </h4>
          <h4>{sla.slaString}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;
