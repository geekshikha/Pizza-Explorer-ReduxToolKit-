export const selectRestaurantsWithPizzas = (reduxState) => {
  // cross-slice -- use more than one slice
  const restaurants = reduxState.resturants.all;
  const pizzas = reduxState.pizzas.allPizzas;

  const resturantswithPizzas = restaurants.map((restaurant) => {
    // for each pizza array inside a restaurant we replace it with
    // the pizza objects from the allPizzas array

    const replacePizzas = restaurant.pizzas.map((pId) =>
      pizzas.find((fullPizza) => pId === fullPizza.id)
    );

    // return the same restaurant obj but with a switched pizzas array
    return { ...restaurant, pizzas: replacePizzas };
  });
  return resturantswithPizzas;
};
