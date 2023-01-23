import React from "react";
import './Header.css'
import {
    AppBar,
    Toolbar,
}
from "@mui/material";

const Header = () => 
{
    return (
        <AppBar sx={{background: '#fff'}}>
            <Toolbar>
                <img src={require('../../assets/logo.png')} className='logo' alt="logo"/>
            </Toolbar>
        </AppBar>
    );
}
export default Header;