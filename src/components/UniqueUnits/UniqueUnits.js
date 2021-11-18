import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
  getCivilizationsSelector,
  removeSelectedUniqueUnit,
} from "../../ducks/civilizations";
import {
  fetchUniqueUnit,
  getUniqueUnitSelector,
} from "../../ducks/civilizations";
import { useParams } from "react-router";

import "../../common/UniqueCard.scss";

const UniqueUnits = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const dataCivilizations = useSelector(getCivilizationsSelector);
  console.log(dataCivilizations);

  const numEl = parseInt(id.match(/\d+/)) - 1;
  const url = Array.from(dataCivilizations)[numEl].unique_unit;

  useEffect(() => {
    dispatch(fetchUniqueUnit(url));
    return () => {
      dispatch(removeSelectedUniqueUnit());
    };
  }, [dispatch, url]);

  const dataUniqueUnit = useSelector(getUniqueUnitSelector);
  console.log('dataUniqueUnit',dataUniqueUnit);

  const handleclick = () => {
    history.goBack("/civilizations");
  };

  
  return (
    <div className="container-for-unique">
      <div className="container-for-unique__card">
            <h4>Name: {dataUniqueUnit.name}</h4>
            <p>Age: {dataUniqueUnit.age}</p>
            <p>Expansion: {dataUniqueUnit.expansion}</p>
            <p>Build time: {dataUniqueUnit.build_time}</p>
        
      </div>
      <button className="button" onClick={handleclick}>Go Back</button>
    </div>
  );
};

export default UniqueUnits;
