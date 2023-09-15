import { createSlice } from "@reduxjs/toolkit";

const Location = createSlice({
  name: "Location",
  initialState: {
    location: {
      lat: 23.022505,
      lan: 72.5713621,
      name: "Ahmedabad",
    },
  },
  reducers: {
    changeLocation: (state, action) => {
      state.location.lat = action.payload.lat;
      state.location.lan = action.payload.lan;
      state.location.name = action.payload.name;
    },
  },
});
export default Location.reducer;
export const { changeLocation } = Location.actions;
