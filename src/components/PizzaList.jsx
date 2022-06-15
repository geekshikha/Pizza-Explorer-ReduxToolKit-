import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortedPizzas } from "../store/pizzas/selectors";
import { userInfo, userFav } from "../store/user/slectors";
import { toggleFavorites } from "../store/user/slice";

const PizzaList = () => {
  const pizzaList = useSelector(sortedPizzas);
  const user = useSelector(userInfo);
  const dispatch = useDispatch();
  const userFavPizza = useSelector(userFav);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>TODO: the list of pizzas</p>
      <h4>
        Welcome <strong>{user.name}</strong>
      </h4>
      <ul style={{ listStyle: "none" }}>
        {pizzaList.map((pizza) => {
          return (
            <li key={pizza.id}>
              <h3>{pizza.name}</h3>
              <img src={pizza.image} width={"300px"} alt="" />
              <h5>no of times bought:{pizza.bought}</h5>
              <p>{pizza.description}</p>
              <button onClick={() => dispatch(toggleFavorites(pizza.id))}>
                {userFavPizza.includes(pizza.id) ? "❤️" : "♡"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PizzaList;
