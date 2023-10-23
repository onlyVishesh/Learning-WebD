import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { restaurantData } from "../config";
import RestaurantCards from "./RestaurantCards";

const FilterRestaurants = (searchText, restaurants) => {
  return restaurants.filter((restaurants) =>
    restaurants.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantData);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const data = FilterRestaurants(searchText, restaurantData);
              setRestaurants(data);
              setSearchText("");
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = FilterRestaurants(searchText, restaurantData);
            setRestaurants(data);
            setSearchText("");
          }}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-btn-icon"
          />
        </button>
      </div>
      <div className="cards">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCards {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
