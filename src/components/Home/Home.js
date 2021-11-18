import React from 'react';
import Navigation from '../Navigation'
import "./Home.scss"
import {useAuth} from '../../hook/use-auth'
import { Redirect } from 'react-router';

const Home = () => {
    const {isAuth} = useAuth();
    return isAuth ? (
        <div className="home"> <Navigation></Navigation></div>
    ) : (
        <Redirect to="/login" />
    )
};

export default Home;