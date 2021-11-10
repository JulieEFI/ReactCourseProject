import React, {  useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { getCivilizationsSelector, removeSelectedUniqueTech} from "../../ducks/civilizations";
import {
  fetchUniqueTech,
  getUniqueTechSelector,
} from "../../ducks/civilizations";
import { useParams } from "react-router";

import "../../common/UniqueCard.scss";

function UniqueTechs() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const dataCivilizations = useSelector(getCivilizationsSelector);
  console.log('civilizations', dataCivilizations)

  const numEl = parseInt(id.match(/\d+/)) - 1;
  const url = Array.from(dataCivilizations)[numEl].unique_tech;
  console.log('url', url)

  useMemo(() => {
    dispatch(fetchUniqueTech(url));
    return () => {
      dispatch(removeSelectedUniqueTech());
    };
  }, [dispatch, url]);

  const dataUniqueTechs = useSelector(getUniqueTechSelector);
  console.log('unic',dataUniqueTechs);

  const handleclick = () => {
    history.goBack("/civilizations");
  };
const {name, age, description, expansion, applies_to, develops_in, build_time, cost} = dataUniqueTechs;

  return (
    <div className="container-for-unique">
      <div className="container-for-unique__card">
      <h4>Name: {name}</h4>
        <p>Age: {age}</p>
        <p>Description: {description}</p>
        <p>Expansion: {expansion}</p>
        <p>Applies to: {applies_to}</p>
        <p>develops_in: {develops_in}</p>
        <p>Build time: {build_time}</p>
        <p>Food: {cost.Food}</p>
        <p>Gold: {cost.Gold}</p>
      </div>
      <button className="button" onClick={handleclick}>Go Back</button>
    </div>
  );
}

export default UniqueTechs;
