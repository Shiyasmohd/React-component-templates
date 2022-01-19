import React from 'react';
import './Footer.css'; 
import logo2 from '../../Assets/logo.png'


function Footer() {
  return (
    <footer>
            <div class="footer-content">
            <div class="footer-txt">
                <h1>ABC</h1>
                <p>13, Baldev Apartments,<br></br>Zeeshan Chowk, 330643 <br></br>Banglore, India</p>
                <p><b>Email</b>: sample@gmail.com</p>
            </div>
            <div class="footer-img">
                <img src={logo2}/>
            </div>
        </div>
            <div class="footer-copyright">
                © Copyright <b>ABC</b>  All Rights Reserved
            </div>
        </footer>
  );
}

export default Footer;
