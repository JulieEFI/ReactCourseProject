import React from "react";
import { useHistory } from "react-router-dom";
import "./UnitItem.scss";

const UnitItem = (props) => {
  const { unit } = props;
  const history = useHistory();

  const handleClickToCreatedIn = (e) => {
    if (e.target.tagName === "BUTTON") {
      history.push(`/units/created_in/:${e.target.id}`);
    }
  };

  return (
    <div className="unit__outer">
      <div className="unit__item">
        <div className="unit__item__inner">
          <h4>Name: {unit.name}</h4>
          <p>Description: {unit.description}</p>
          <p>Expansion: {unit.expansion}</p>
          <p>Accuracy: {unit.accuracy}</p>
          <p>Age: {unit.age}</p>
          <p>Armor: {unit.armor}</p>
          <p>Attack: {unit.attack}</p>
          <p>Attack delay: {unit.attack_delay}</p>
          <p>Build time: {unit.build_time}</p>
          <p>Wood: {unit.cost?.Wood}</p>
          <p>Gold: {unit.cost?.Gold}</p>
          <p>Line of sight: {unit.line_of_sight}</p>
          <p>Movement rate: {unit.movement_rate}</p>
          <p>Range: {unit.range}</p>
          <p>Reload time: {unit.reload_time}</p>
        </div>
      </div>
      <button className="button" id={unit.id} onClick={handleClickToCreatedIn}>
        Created in
      </button>
    </div>
  );
};

export default UnitItem;
