import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Follows from "../models/follows/follows";

interface FollowState {
  follows: Follows[];
}

const initialState: FollowState = {
  follows: [],
};

export const followSlice = createSlice({
  name: "follows",
  initialState,
  reducers: {
    initFollows: (state, action: PayloadAction<Follows[]>) => {
      state.follows = action.payload;
    },

    addFollow: (state, action: PayloadAction<Follows>) => {
      state.follows.push(action.payload);
    },

    removeFollow: (state, action: PayloadAction<Follows>) => {
      state.follows = state.follows.filter(
        (v) =>
          v.vacationId !== action.payload.vacationId ||
          v.userId !== action.payload.userId
      );
      //   state.follows = state.follows.filter(
      //     (v) =>
      //       v.vacationId !== action.payload.vacationId &&
      //       v.userId !== action.payload.userId
      //   );
    },
  },
});

export const { initFollows, addFollow, removeFollow } = followSlice.actions;
export default followSlice;
