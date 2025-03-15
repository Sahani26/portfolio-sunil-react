import React from "react";
import instagramIcon from "../image/instagram-white.png";
import linkedinIcon from "../image/linkedin-ico.png";
import githubIcon from "../image/github-ico.png";
import youtubeIcon from "../image/yt-ico.png";
import xIcon from "../image/x-icon.png"; // Update path accordingly
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        {/* Upper Footer Section */}
        <div className="main-footer__upper">
          {/* Social Links */}
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="http://linkedin.com/in/sunil-sahani-800875310/">
                <img className="main-footer__icon" src={linkedinIcon} alt="LinkedIn Profile" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Sahani26">
                <img className="main-footer__icon" src={githubIcon} alt="GitHub Profile" />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img className="main-footer__icon" src={youtubeIcon} alt="YouTube Profile" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sunil1626_/?hl=en">
                <img className="main-footer__icon" src={instagramIcon} alt="Instagram Profile" />
              </a>
    <a target="_blank" rel="noreferrer" href="https://twitter.com/your_x_account">
  <img className="main-footer__icon" src={xIcon} alt="X Profile" />
</a>
            </div>
          </div>

          {/* About Section */}
          <div className="main-footer__row main-footer__row-2">
            <h2 className="heading heading-sm text-lt">Sunil Sahani</h2>
            <p className="main-footer__short-desc">
              I am a Web Developer working on both front-end and back-end development in nopCommerce.
              I have experience in customizing nopCommerce plugins, developing themes, and implementing CRUD operations.
              My expertise includes <strong>ASP.NET Core, C#, Entity Framework, and SQL Server</strong>.
              <br /><br />
              I am passionate about building scalable and efficient e-commerce solutions and continuously improving my skills in ASP.NET development.
            </p>
          </div>
        </div>

        {/* Lower Footer Section */}
        <div className="main-footer__lower">
          © {new Date().getFullYear()} Made by 
          <span rel="noreferrer" target="_blank" to=""> Sunil Sahani</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
