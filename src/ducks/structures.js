import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TutorialDataService from "../servicies/service";

const initialState = {
  structures: {},
};

export const fetchStructures = createAsyncThunk("GET_STRUCTURES", async () => {
  const res = await TutorialDataService.getStructures();
  return res.data;
});

const dataStructuresSlice = createSlice({
  name: "structures",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStructures.pending]: () => {
      console.log("Pending");
    },
    [fetchStructures.fulfilled]: (state, action) => {
      console.log("Fetched data!");
      return { ...action.payload };
    },
    [fetchStructures.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const getStructuresSelector = (state) => state.structures.structures;

const { reducer } = dataStructuresSlice;
export default reducer;
