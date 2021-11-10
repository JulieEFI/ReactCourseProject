import React from "react";
import "./StructureItem.scss";
const StructureItem = (props) => {
    const { structure} = props;

    return (
      <div className="structure__item">
          <div className="structure__inner">
                <h4>Name: {structure.name}</h4>
                <p>Expansion: {structure.expansion}</p>
                <p>Age: {structure.age}</p>    
                <p>Armor: {structure.armor}</p>
                <p>Build time: {structure.build_time}</p>
                <p>Hit points: {structure.hit_points}</p>
                <p>Line of sight: {structure.line_of_sight}</p>
                <p>Special: {structure.special}</p>
                <p>Wood: {structure.cost.Wood}</p>

          </div>
      </div>
    );
}

export default StructureItem;