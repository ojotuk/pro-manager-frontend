import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../logo.svg";
import fb from "./../../../asset/img/icons8-facebook-circled-90 1.png";
import instagram from "./../../../asset/img/icons8-instagram-96 1.png";
import linkedin from "./../../../asset/img/icons8-linkedin-104 1.png";
import twitter from "./../../../asset/img/icons8-twitter-96 1.png";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top-footer row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <h4>Features</h4>
            <ul>
              <li>
                <Link to="/">Attendance management</Link>
              </li>
              <li>
                <Link to="/">Leave management</Link>
              </li>
              <li>
                <Link to="/">Payroll management</Link>
              </li>
              <li>
                <Link to="/">Performance management</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">FAQ's</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">Partner programme</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-footer">
          <Link to="/">
            <div className="brand-name">
              <img src={logo} alt='logo'/>
              <span>Pro manager</span>
            </div>
          </Link>
          <ul className="policy">
            <li>
              <Link to="/">Security &amp; Privacy</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
          <div className="contact-media">
            <span>
              <img src={twitter} className="mr-2"  alt='socials'/>
              <img src={fb} className="mr-2"  alt='socials'/>
              <img src={linkedin} className="mr-2"  alt='socials'/>
              <img src={instagram} alt='socials'/>
            </span>
            <a href="tel:+23490386338" className="mt-4 mb-4">
              +23490272672726
            </a>
            <a href="mailto:hello@promanager.com">hello@promanager.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
