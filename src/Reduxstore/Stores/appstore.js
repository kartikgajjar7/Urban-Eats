import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slices/Cartslice";
import LocationReducer from "../slices/Location";
export const appstore = configureStore({
  reducer: {
    cart: CartReducer,
    location: LocationReducer,
  },
});

export default appstore;
