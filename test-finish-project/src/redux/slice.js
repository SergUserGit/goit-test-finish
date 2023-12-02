import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const handlePending = (state) => {
  state.adverts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.adverts.isLoading = false;
  state.adverts.error = action.payload;
};
export const advertsSlice = createSlice({
  name: "catalogauto",
  initialState: {
    adverts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [fetchAdverts.pending]: handlePending,
    [fetchAdverts.fulfilled](state, action) {
      state.adverts.isLoading = false;
      state.adverts.error = null;
      state.adverts.items = action.payload;
    },
    [fetchAdverts.rejected]: handleRejected,
  },
});

export const advertsReducer = advertsSlice.reducer;
