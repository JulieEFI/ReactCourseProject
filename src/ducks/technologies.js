import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TutorialDataService from "../servicies/service";

const initialState = {
  technologies: {},
};

export const fetchTechnologies = createAsyncThunk(
  "GET_TECHNOLOGIES",
  async () => {
    const res = await TutorialDataService.getTechnologies();
    return res.data;
  }
);

const dataTechnologiesSlice = createSlice({
  name: "technologies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTechnologies.pending]: () => {
      console.log("Pending");
    },
    [fetchTechnologies.fulfilled]: (state, action) => {
      console.log("Fetched data!");
      return { ...action.payload };
    },
    [fetchTechnologies.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const getTechnologiesSelector = (state) =>
  state.technologies.technologies;

const { reducer } = dataTechnologiesSlice;
export default reducer;
