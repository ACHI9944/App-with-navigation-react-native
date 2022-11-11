const { configureStore } = require("@reduxjs/toolkit");
import FavoritesReducer from "./favorites";

export const store = configureStore({
  reducer: { favoriteMeals: FavoritesReducer },
});
