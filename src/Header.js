import React from 'react';
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { Link, useHistory } from "react-router-dom";


function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header_icon" />
                </IconButton>
            ) : (
                <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
                </IconButton>
            )}

            <Link to="/">
                <img 
                className="header_logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="logo"
                />
            </Link>

            <Link to="/chats">
                <IconButton >
                    <ChatIcon fontSize="large" className="header_icon" />
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Header
