import { createSlice } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
const Device = createSlice({
  name: "Device",
  initialState: {
    isPhone: null,
  },
  reducers: {
    IsPhone: (state, action) => {
      state.isPhone = action.payload;
    },
  },
});
export default Device.reducer;
export const { IsPhone } = Device.actions;
