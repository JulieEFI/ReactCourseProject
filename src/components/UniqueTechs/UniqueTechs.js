import React, {  useEffect } from "react";
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
  const url = Array.from(dataCivilizations)[numEl]?.unique_tech;
  console.log('url', url)

  useEffect(() => {
    dispatch(fetchUniqueTech(url));
    return () => {
      dispatch(removeSelectedUniqueTech());
    };
  }, [dispatch, url]);

  const dataUniqueTechs = useSelector(getUniqueTechSelector);
  console.log('dataUniqueTechs',dataUniqueTechs);

  const handleclick = () => {
    history.goBack("/civilizations");
  };

  return (
    <div className="container-for-unique">
      <div className="container-for-unique__card">
      <h4>Name: {dataUniqueTechs?.name}</h4>
        <p>Age: {dataUniqueTechs?.age}</p>
        <p>Description: {dataUniqueTechs?.description}</p>
        <p>Expansion: {dataUniqueTechs?.expansion}</p>
        <p>Build time: {dataUniqueTechs?.build_time}</p>
        <p>Food: {dataUniqueTechs.cost?.Food}</p>
        <p>Gold: {dataUniqueTechs.cost?.Gold}</p>
      </div>
      <button className="button" onClick={handleclick}>Go Back</button>
    </div>
  );
}

export default UniqueTechs;
