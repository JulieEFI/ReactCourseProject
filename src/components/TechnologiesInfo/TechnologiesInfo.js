import React from "react";
import { useSelector } from "react-redux";
import { getTechnologiesSelector } from "../../ducks/technologies";
import TechnologyItem from "../TechnologyItem/TechnologyItem";
import "./TechnologiesInfo.scss";

const TechnologiesInfo = () => {
  const technologies = useSelector(getTechnologiesSelector);
  console.log("INFO:", technologies);

  return (
    <div className="technologies__wrapper">
      <div className="technologies__list">
        <h2>Technologies</h2>
        <div className="technologies__container">
          {Array.from(technologies).map((technology, index) => {
            return <TechnologyItem key={index} technology={technology} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesInfo;
