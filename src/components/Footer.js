import React from 'react';
import '../styles/Footer.css';







function Footer() {


  return (
    <footer className="footer">
      <p>© 2023 Aliya's React Profile</p>
      <div className="icons">
        <a href="https://github.com/aliyajeylani/">
          <img src="git_hub_logo_white.png" alt="Git Hub Icon" />
        </a>
        <a href="https://www.linkedin.com/in/aliya-jeylani-15a3aa57/">
          <img src="linkedin_icon.png" alt="Linkedin Icon" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="Instagram_icon.png" alt="Instagram Icon"/>
        </a>

      </div>

    </footer>
  );
}

export default Footer;