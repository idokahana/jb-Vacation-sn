import { configureStore } from "@reduxjs/toolkit";
import { vacationSlice } from "./vacationSlice";
import { followSlice } from "./followsSlice";

const store = configureStore({
  reducer: {
    vacation: vacationSlice.reducer,
    follows: followSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
