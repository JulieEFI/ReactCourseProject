import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUnits, getUnitsSelector } from '../../ducks/units';
import UnitsInfo from '../UnitsInfo';

const Technologies = () => {
    const dispatch =  useDispatch();
   
    useEffect(() => {
        dispatch(fetchUnits())
       
    }, [dispatch,]);

    const data = useSelector(getUnitsSelector);
    console.log(data)
    
    return (
        <div><UnitsInfo/></div>
    );
};

export default Technologies;