// export const getAllPizzas = (reduxState) => reduxState.pizzas.allPizzas;

export const sortedPizzas = (reduxState) => {
  const newArray = [...reduxState.pizzas.allPizzas];
  return newArray.sort((a, b) => b.bought - a.bought);
};
