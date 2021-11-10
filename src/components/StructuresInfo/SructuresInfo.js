import React from 'react';
import { useSelector } from "react-redux";
//import { Link } from 'react-router-dom';
import { getStructuresSelector } from "../../ducks/structures";
import StructureItem from "../StructureItem/";
import "./StructuresInfo.scss";

const SructuresInfo = () => {
    const structures = useSelector(getStructuresSelector);
    console.log("INFO:", structures);
  
    return (
      <div className="structures__wrapper">
        <div className="structures__list">
        <h2>Structures</h2>
          <div className="structures__container">
        {Array.from(structures).map((structure, index)=> {
          return <StructureItem key={index} structure={structure}/>
        })}
          </div>
        </div>
      </div>
    );
};

export default SructuresInfo;