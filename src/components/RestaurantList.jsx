import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsWithPizzas } from "../store/selectors";

const RestaurantList = () => {
  const restaurants = useSelector(selectRestaurantsWithPizzas);

  return (
    <div>
      <h1>RestaurantList</h1>

      <div>
        <ul style={{ listStyle: "none" }}>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <strong>{restaurant.name}</strong>
              <ul style={{ listStyle: "none" }}>
                {restaurant.pizzas.map((p) => (
                  <li>{p.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantList;
