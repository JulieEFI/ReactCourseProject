import React from 'react';
import { Link } from 'react-router-dom';
import user from "../../images/user.png";
import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
        <Link className="link" to="/">
        <div className="header__logo">Age of Impires</div>
        </Link>
        <div className="header__logo">
          Login
        </div>
        </div>
    );
};

export default Header;