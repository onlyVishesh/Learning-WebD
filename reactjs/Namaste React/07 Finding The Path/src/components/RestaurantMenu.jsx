import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { img_CDM_url } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=685206"
    );
    const restaurantDetails = await response.json();
    setRestaurant(restaurantDetails);
    console.log(restaurantDetails);
  }
  return (
    <>
      <div>
        <img
          src={
            img_CDM_url +
            restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt={restaurant?.data?.cards[0]?.card?.card?.info?.name}
        />
      </div>
      <div>
        <h1>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h1>
        <p>{restaurant?.data?.cards[0]?.card?.card?.info?.locality}</p>
        <p>
          {restaurant?.data?.cards[0]?.card?.card?.info?.cuisines.join(" ,")}.
        </p>
        <div>
          <p>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#ffffff" }}
              size="xs"
            />{" "}
            {restaurant?.data?.cards[0]?.card?.card?.info?.avgRating}(
            {restaurant?.data?.cards[0]?.card?.card?.info?.totalRatings})
          </p>
          {restaurant?.data?.cards[0]?.card?.card?.info?.veg ? (
            <p>Veg</p>
          ) : (
            <p>Non - Veg</p>
          )}

          <p>{restaurant?.data?.cards[0]?.card?.card?.info?.sla?.slaString}</p>

          <p>
            {restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </p>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
