import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slices/Cartslice";
import LocationReducer from "../slices/Location";
import DeviceReducer from "../slices/Device";
export const appstore = configureStore({
  reducer: {
    cart: CartReducer,
    location: LocationReducer,
    device: DeviceReducer,
  },
});

export default appstore;
