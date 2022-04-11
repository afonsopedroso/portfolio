import React, { Component } from 'react';
import styles from "./NavButton.module.css"
 
function NavButton({link, text}) {
    return ( <>
        <a href={`/${link}`}>{text}</a>
    </> );
}

export default NavButton;