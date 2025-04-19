import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import VacationModel from "../models/vacation/VacationModel";

interface VacationState {
  vacation: VacationModel[];
}

const initialState: VacationState = {
  vacation: [],
};

export const vacationSlice = createSlice({
  name: "vacation",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<VacationModel[]>) => {
      state.vacation = action.payload;
    },

    update: (state, action: PayloadAction<VacationModel>) => {
      const index = state.vacation.findIndex(
        (v) => v.vacationId === action.payload.vacationId
      );
      if (index > -1) {
        state.vacation[index] = action.payload;
      }
    },
  },
});

export const { init, update } = vacationSlice.actions;

export default vacationSlice.reducer;
