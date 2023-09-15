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
    removeitem: (state) => {
      // remove the given item
      state.items.pop();
    },
    clearcart: (state) => {
      state.items.length = 0;
    },
  },
});
export default Cartslice.reducer;
export const { additem, removeitem, clearcart } = Cartslice.actions;
