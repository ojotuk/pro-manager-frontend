import React, { useState } from "react";
import Button from "../Button/Button";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import "./nav.css";
import classnames from 'classnames'


export default function Nav() {
    const [open,setOpen] = useState(false)
    const toggleClass = classnames({
        'toggler':true,
        'open':open
    })
    const navMenuClass = classnames({
        'nav-list-wrapper':true,
        'open-nav':open
    })
    const handleOpen = ()=>{
        setOpen(!open)
    }
  return (
    <header className='nav-header'>
    <nav className="container navbar-item">
      <div className="nav-brand">
        <img src={logo} alt='brand'/>
        <div className='brand-name'>Pro manager</div>
        <div className={toggleClass} onClick={handleOpen}>
            <div className='bar'></div>
        </div>
      </div>
      <div className={navMenuClass}>
        <ul className="nav-menu">
          <li className="nav-menu-brand">
            <Link to="/">
              <div className="nav-brand">
                <img src={logo} alt='brand'/>
                <div>Pro manager</div>
              </div>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/">Resources</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/">Features</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/">Pricing</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
        <div className='nav-menu-actions-wrapper'>
          <ul className="nav-menu-actions">
            <li>
              <Link to="/sign-in">Login</Link>
            </li>
            <li>
              <Button text="Try for Free" link="/signup" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}
