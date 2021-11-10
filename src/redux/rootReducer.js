import { combineReducers } from "@reduxjs/toolkit";
import civilizationsReducer from "../ducks/civilizations";
import structuresReducer from '../ducks/structures';
import technologiesReducer from '../ducks/technologies';
import unitsReducer from '../ducks/units';


export default combineReducers({
    civilizations: civilizationsReducer,
    structures: structuresReducer,
    technologies: technologiesReducer,
    units: unitsReducer,
})