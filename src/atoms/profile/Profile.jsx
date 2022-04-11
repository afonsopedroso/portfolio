import React, { Component } from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.image}>
      <img
        src="/src/assets/picure.png"
        alt="Avatar"
        className="avatar"
      ></img>
    </div>
  );
}

export default Profile;
