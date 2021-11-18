import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStructures, getStructuresSelector } from "../../ducks/structures";
import StructuresInfo from "../StructuresInfo/SructuresInfo";

const Structures = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStructures());
  }, [dispatch]);

  const data = useSelector(getStructuresSelector);
  console.log(data);

  return (
    <div>
      <StructuresInfo />
    </div>
  );
};

export default Structures;
