import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCivilizations, getCivilizationsSelector } from '../../ducks/civilizations';
import CivilizationsInfo from '../CivilizationsInfo/CivilizationsInfo';


const Civilizations = () => {
    const dispatch =  useDispatch();
   
    useEffect(() => {
        dispatch(fetchCivilizations())
       
    }, [dispatch]);
    

    const data = useSelector(getCivilizationsSelector);
    console.log(data)
    
    return (
        <div><CivilizationsInfo/></div>
    );
};

export default Civilizations;