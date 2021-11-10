import React, { useEffect, useMemo } from "react";
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
  const url = Array.from(dataCivilizations)[numEl].unique_tech;

  useMemo(() => {
    dispatch(fetchUniqueUnit(url));
    return () => {
      dispatch(removeSelectedUniqueUnit());
    };
  }, [dispatch, url]);

  const dataUniqueUnit = useSelector(getUniqueUnitSelector);
  console.log(dataUniqueUnit);

  const handleclick = () => {
    history.goBack("/civilizations");
  };

  const {
    name,
    age,
    discription,
    expansion,
    develops_in,
    applies_to,
    build_time,
  } = dataUniqueUnit;
  
  return (
    <div className="container-for-unique">
      <div className="container-for-unique__card">
        {Object.keys(dataUniqueUnit).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <>
            <h4>Name: {name}</h4>
            <p>Description: {discription}</p>
            <p>Age: {age}</p>
            <p>Expansion: {expansion}</p>
            <p>develops_in: {develops_in}</p>
            <p>applies_to: {applies_to}</p>
            <p>Build time: {build_time}</p>
          </>
        )}
      </div>
      <button className="button" onClick={handleclick}>Go Back</button>
    </div>
  );
};

export default UniqueUnits;
