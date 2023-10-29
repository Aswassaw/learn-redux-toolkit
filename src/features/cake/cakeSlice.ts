import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  numOfCakes: number;
};

const initialState: initialStateType = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes = state.numOfCakes - 1;
    },
    restocked: (state, action: PayloadAction<number>) => {
      console.log(action);

      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
