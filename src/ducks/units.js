import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TutorialDataService from "../servicies/service";

const initialState = {
  units: {},
  createdIn: {},
};

export const fetchUnits = createAsyncThunk("GET_UNITS", async () => {
  const res = await TutorialDataService.getUnits();
  return res.data;
});

export const fetchCreatedIn = createAsyncThunk(
  "GET_UNITS_CREATED_IN",
  async (url) => {
    const res = await fetch(url).then((data) => data.json());
    return res;
  }
);

const dataUnitsSlice = createSlice({
  name: "Units",
  initialState,
  reducers: {
    removeSelectedCreatedIn: (state) => {
      state.createdIn = [];
    },
  },
  extraReducers: {
    [fetchUnits.pending]: () => {
      console.log("Pending");
    },
    [fetchUnits.fulfilled]: (state, action) => {
      console.log("Fetched data!");
      return { ...state, ...action.payload };
    },
    [fetchUnits.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchCreatedIn.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, createdIn: payload };
    },
  },
});
export const { removeSelectedCreatedIn } = dataUnitsSlice.actions;
export const getUnitsSelector = (state) => state.units.units;
export const getCreatedInSelector = (state) => state.units.createdIn;
const { reducer } = dataUnitsSlice;
export default reducer;
