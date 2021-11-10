import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TutorialDataService from "../servicies/service";

const initialState = {
    civilizations: {},
    uniqueTechs:{},
    uniqueUnits: {}
}

export const fetchCivilizations = createAsyncThunk( // two arguments: first - string identifier, second - payload creator payload function
    "GET_CIVILIZATIONS",
    async () => {
        const res = await TutorialDataService.getCivilizations();
        return res.data; 
    }
  );

  
  export const fetchUniqueTech = createAsyncThunk(
    "GET_CIVILIZATIONS_UNIQUE_TECH",
    async (url) => {
      const res = await fetch(url).then(
      (data) => data.json()
    )
    return res
  })

  export const fetchUniqueUnit = createAsyncThunk(
    "GET_CIVILIZATIONS_UNIQUE_UNIT",
    async (url) => {
      const res = await fetch(url).then(
      (data) => data.json()
    )
    return res
  })
  
  
  const dataCivilizationsSlice = createSlice({
    name: "civilizations",
    initialState,
    reducers: {
      removeSelectedUniqueTech: (state) => {
        state.uniqueTechs = [];
      },
      removeSelectedUniqueUnit: (state) => {
        state.uniqueUnits = [];
      },
    },
    extraReducers: {
      [fetchCivilizations.pending]: () => {
        console.log("Pending");
      },
      [fetchCivilizations.fulfilled]: (state, action) => {
          console.log('Fetched data!')
        return {...action.payload};
      },
      [fetchCivilizations.rejected]: () => {
        console.log("Rejected!");
      },
      [fetchUniqueTech.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, uniqueTechs: payload };
      },
      [fetchUniqueUnit.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, uniqueUnits: payload };
      },
    }
  });
  
  export const { removeSelectedUniqueTech, removeSelectedUniqueUnit } = dataCivilizationsSlice.actions;
  export const getCivilizationsSelector = (state) => state.civilizations.civilizations;
  export const getUniqueTechSelector = (state) => state.civilizations.uniqueTechs;
  export const getUniqueUnitSelector = (state) => state.civilizations.uniqueUnits;
  
const { reducer } = dataCivilizationsSlice;
export default reducer;
  
