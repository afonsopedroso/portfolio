import React, { Component } from "react";
import NavButton from "../../atoms/NavButtons/NavButton";
import styles from "./TopBar.module.scss";
export const TopBar = React.memo(() => {
  return (
    <div className={styles.topnav}>
      <NavButton text="About" link="about" />
      <NavButton text="Work Experience" link="work" />
      <NavButton text="Hobbies" link="hobbies" />
      <NavButton text="Contact" link="contact" />
    </div>
  );
})


