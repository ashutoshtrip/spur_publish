import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuora,
  faYoutube,
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram
  
} from "@fortawesome/free-brands-svg-icons";
function Footer()
{
  return (
    <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col1">
          <h4>S P U R</h4>
         
          
      
          <ui className="list-unstyled">
          <a href="#"
  className="quora social">
  <FontAwesomeIcon icon={faQuora} size="2x" />
</a>
<a href="https://www.youtube.com/?gl=IN"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="#"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="#" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="#"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<a href="#"
  className="google social">
  <FontAwesomeIcon icon={faGoogle} size="2x" />
</a>
          </ui>
        </div>
       
       
      </div>
      <hr className="footer-hr" />
      <div className="row">
        <p className="col-sm">
          &copy;{2021} S P U R | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
  );
}
export default Footer;
