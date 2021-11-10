import React from 'react';
import { useHistory } from 'react-router-dom';
import "./UnitItem.scss"

const UnitItem = (props) => {
    const { unit} = props;
    const history = useHistory();
    
    const handleClickToCreatedIn = (e) => {
        if (e.target.tagName === 'BUTTON') {
          history.push(`/units/created_in/:${e.target.id}`);
        }
      }

    const {id, name, description, expansion, accuracy, age, armor, attack, attack_delay, build_time, cost, line_of_sight, movement_rate,
    range, reload_time} = unit;
    return (
        <div className="unit__outer">
        <div className="unit__item">
        <div className="unit__item__inner">
              <h4>Name: {name}</h4>
              <p>Description: {description}</p>
              <p>Expansion: {expansion}</p>    
              <p>Accuracy: {accuracy}</p>
              <p>Age: {age}</p>
              <p>Armor: {armor}</p>
              <p>Attack: {attack}</p>
              <p>Attack delay: {attack_delay}</p>
              <p>Build time: {build_time}</p>
              <p>Wood: {cost.Wood}</p>
              <p>Gold: {cost.Gold}</p>
              <p>Line of sight: {line_of_sight}</p>
              <p>Movement rate: {movement_rate}</p>
              <p>Range: {range}</p>
              <p>Reload time: {reload_time}</p>
        </div>
    </div>
    <button className="button" id={id}  onClick={handleClickToCreatedIn} >Created in</button>
    </div>
    );
};

export default UnitItem;