import React from "react";
import { useSelector } from "react-redux";
import { getCivilizationsSelector } from "../../ducks/civilizations";
import CivilizationItem from "../CivilizationItem/CivilizationItem";
import "./CivilizationsInfo.scss";

const CivilizationsInfo = () => {
  const civilizations = useSelector(getCivilizationsSelector);
  console.log("INFO:", civilizations);

  return (
    <div className="civilizations__wrapper">
      <div className="civilizations__list">
      <h2>Civilizations</h2>
        <div className="civilizations__container">
          {Array.from(civilizations).map((civilization, index) => {
            return <CivilizationItem key={index} civilization={civilization} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CivilizationsInfo;
