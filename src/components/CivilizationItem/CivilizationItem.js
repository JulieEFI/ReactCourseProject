import React from "react";
import { useHistory } from 'react-router-dom';

import "./CivilizationItem.scss";

const CivilizationItem = (props) => {
  const { civilization } = props;
  const history = useHistory();

  const handleClickToTech = (e) => {
    if (e.target.tagName === 'BUTTON') {
      history.push(`/civilizations/unique_tech/:${e.target.id}`);
    }
  }
  const handleClickToUnit = (e) => {
    if (e.target.tagName === 'BUTTON') {
      history.push(`/civilizations/unique_unit/:${e.target.id}`);
    }
    
  }
  
  return (
    <div className="civilization__outer">
      <div className="civilization__item">
      <div className="civilization__inner">
          <h4>Name: {civilization.name}</h4>
          <p>Expansion: {civilization.expansion}</p>
          <p>Army type: {civilization.army_type}</p>
          <p>Team bonus: {civilization.team_bonus}</p>
          <p>
            Civilization bonus: {civilization.civilization_bonus.join(", ")}
          </p>
        </div>
      </div>
      <button className="button"  id={civilization.id}  onClick={handleClickToTech} >Get unique tech</button>
     <button className="button" id={civilization.id} onClick={handleClickToUnit} >Get unique unit</button>
    </div>
  );
};

export default CivilizationItem;

