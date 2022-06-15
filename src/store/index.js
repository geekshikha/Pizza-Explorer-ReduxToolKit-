import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzas/slice";
import userSlice from "./user/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzaSlice,
    user: userSlice,
  },
});

export default store;
