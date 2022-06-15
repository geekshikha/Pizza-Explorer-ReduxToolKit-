import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzas/slice";
import userSlice from "./user/slice";
import restaurantSlice from "./restaurants/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzaSlice, //! the pizzas and other keys are referred in selectors for reduxState.(keysname)
    user: userSlice,
    resturants: restaurantSlice,
  },
});

export default store;
