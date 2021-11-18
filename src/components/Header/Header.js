import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hook/use-auth';
import { removeUser } from '../../ducks/user';
import "./Header.scss"

const Header = () => {
    const dispatch = useDispatch();
    const{ email} = useAuth();
    return (
        <div className="header">
        <Link className="link" to="/">
        <div className="header__logo">Age of Impires</div>
        </Link>
        <div className="header__registration">
        <> {Boolean(email) ? (
         <><button className="logout-btn" onClick={() => { dispatch(removeUser()); } }>Log out</button><div> User: {email}</div></>
         ) : ""}
         </>
         <div className="header__registration-item"><Link to="/login"> Login </Link></div>
         <div className="header__registration-item"><Link to="/register"> Register </Link></div>
        
        </div>
        </div>
    );
};

export default Header;