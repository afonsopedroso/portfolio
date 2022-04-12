import React, { Component } from "react";
import NavButton from "../atoms/NavButtons/NavButton";
import Profile from "../atoms/profile/Profile";
import Avatar from "@mui/material/Avatar";
import prof from "../assets/pic.jpg";
import styles from "./MainPage.module.css";
import ProfileFull from "../Molecules/ProfileFull";
import Work from "../Molecules/Work/Work";
import { TopBar } from "../organisms/TopBar/TopBar";

function MainPage() {
  return (
    <>
    
     <TopBar />
    
      <div className={styles.profile}>
      <div className={styles.prof}>
        <ProfileFull />
      </div>
      </div>
      {/* <Avatar alt="Afonso Pedroso" src={prof} sx={{ width: 200, height: 200 }} /> */}
      <div className={styles.contacts}>
        <Work />
      </div>
    </>
  );
}

export default MainPage;
