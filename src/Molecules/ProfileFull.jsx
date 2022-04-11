import React, { Component } from 'react';
import "./ProfileFull.scss"
import profile from "../assets/pic/picture.png"

function ProfileFull() {
    return ( 
    <div class="card">
      <img src={profile} alt="Person" class="card__image"/>
      <p class="card__name">Afonso Pedroso</p>
      <div class="grid-container">
  
        Hello I'm Afonso and I'm aspiring to be a Front End developer, I love tackling new challenges and learn new things.
        I'm using this page to present my self and a part of my life. Hope you enjoy it :). Feel free to reach out for help in your awesome projects 
        or just to say hi! 
  
      </div>
      {/* <ul class="social-icons">
        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="#"><i class="fa fa-codepen"></i></a></li>
      </ul> */}
      <button class="btn draw-border">Follow</button>
      <button class="btn draw-border">Message</button>
  
    </div>
    );
}

export default ProfileFull;