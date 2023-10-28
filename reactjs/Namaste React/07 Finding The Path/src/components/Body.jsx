import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";

const FilterRestaurants = (searchText, restaurants) => {
  return restaurants.filter((restaurants) =>
    restaurants.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001"
      );
      const json = await data.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            console.log(checkData);
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);

      setAllRestaurants(resData);
      setRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  if (!allRestaurants) return null;

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
          onKeyUp={(e) => {
            const data = FilterRestaurants(searchText, allRestaurants);
            setRestaurants(data);
            if (e.key === "Enter") {
              const data = FilterRestaurants(searchText, allRestaurants);
              setRestaurants(data);
              setSearchText("");
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = FilterRestaurants(searchText, allRestaurants);
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
        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : restaurants.length === 0 ? (
          <h1>No Match Found</h1>
        ) : (
          restaurants.map((restaurant) => {
            return (
              <RestaurantCards
                {...restaurant?.info}
                key={restaurant?.info?.id}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
