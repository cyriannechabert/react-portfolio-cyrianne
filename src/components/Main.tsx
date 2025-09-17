import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/cyriannechabert" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/cyriannechabert" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Cyrianne Chabert</h1>
          <p>Mechanical Engineering Student<p>
          </p>Columbia University - Mines ParisTech</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/cyriannechabert" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/cyriannechabert" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;