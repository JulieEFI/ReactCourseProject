import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTechnologies,
  getTechnologiesSelector,
} from "../../ducks/technologies";
import TechnologiesInfo from "../TechnologiesInfo";

const Technologies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);

  const data = useSelector(getTechnologiesSelector);
  console.log(data);

  return (
    <div>
      <TechnologiesInfo />
    </div>
  );
};

export default Technologies;
