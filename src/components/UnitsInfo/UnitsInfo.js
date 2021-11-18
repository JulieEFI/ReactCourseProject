import React from "react";
import { useSelector } from "react-redux";
import { getUnitsSelector } from "../../ducks/units";
import UnitItem from "../UnitItem/UnitItem";
import "./UnitsInfo.scss";

const UnitsInfo = () => {
  const units = useSelector(getUnitsSelector);
  console.log("INFO:", units);
  return (
    <div>
      <div className="units__wrapper">
        <div className="units__list">
          <h2>Units</h2>
          <div className="units__container">
            {Array.from(units).map((unit, index) => {
              return <UnitItem key={index} unit={unit} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitsInfo;
