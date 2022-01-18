import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react';
import './About.css';

function About() { 
  const Completionist = () => <span>You are good to go!</span>;
  return (
    <div className="about">
      <div class="about-us">
        <h1>About</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="contact-us"><br/>
      <h1>Contact Us</h1>
      <h4>Address</h4>
        <p>13, Baldev Apartments,<br></br>Zeeshan Chowk, 330643<br></br><br></br> Email : abc@gmail.com <br></br>Phone No : 006 78230653</p>
        <a href="#"><Facebook className="social-icon-link" ></Facebook></a>
       <a href="#"><Instagram className="social-icon-link"></Instagram></a>
      <a href="#"><Twitter className="social-icon-link"></Twitter></a>
       <a href="#"><LinkedIn className="social-icon-link"></LinkedIn></a>
      </div>
     
    </div>
  );
}

export default About;
