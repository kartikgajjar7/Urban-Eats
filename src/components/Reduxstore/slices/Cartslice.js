import { createSlice } from "@reduxjs/toolkit";
const Cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      state.items = state.items.filter(
        (items) => items.Main_item.card.info.name !== action.payload
      );
    },
    clearcart: (state) => {
      state.items.length = 0;
    },
  },
});
export default Cartslice.reducer;
export const { additem, removeitem, clearcart } = Cartslice.actions;
