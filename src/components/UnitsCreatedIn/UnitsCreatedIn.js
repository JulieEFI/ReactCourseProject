import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { getUnitsSelector, removeSelectedCreatedIn } from "../../ducks/units";
import { fetchCreatedIn, getCreatedInSelector } from "../../ducks/units";
import UnitsCreatedInItem from "../UnitsCreatedInItem/UnitsCreatedInItem";
import { useParams } from "react-router";

import "./UnitsCreateIn.scss";
import "../../common/UniqueCard.scss";

function UnitsCreatedIn() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const dataUnits = useSelector(getUnitsSelector);
  console.log("units", dataUnits);

  const numEl = parseInt(id.match(/\d+/)) - 1;
  const url = Array.from(dataUnits)[numEl].created_in;
  console.log("url", url);

  const handleclick = () => {
    history.goBack("/units");
  };

  useMemo(() => {
    dispatch(fetchCreatedIn(url));
    return () => {
      dispatch(removeSelectedCreatedIn());
    };
  }, [dispatch, url]);

  const dataCreatedIn = useSelector(getCreatedInSelector);
  console.log("created_in", dataCreatedIn);

  return (
    <>
      <div className="container-created-in">
        <>
          {dataCreatedIn.map((createdIn, index) => {
            return <UnitsCreatedInItem createdIn={createdIn} key={createdIn} />;
          })}
        </>
      </div>
      <button className="button" onClick={handleclick}>Go Back</button>
    </>
  );
}

export default UnitsCreatedIn;
