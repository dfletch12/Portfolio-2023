import './index.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoSubtitle from '../../assets/images/dfletch-webdesign.svg';
import LogoD from '../../assets/images/DF-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="logo">
                <img src={LogoD} alt="Logo" />
                {/* <img className='sub-logo' src={LogoSubtitle} alt="Logo Dalton" /> */}
            </Link>\
            <nav>
                <NavLink exact='true' activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname="active" className='about-link' to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" className='portfolio-link' to="/portfolio">
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    {/* fix link */}
                    <a href="https://www.linkedin.com/in/dalton-f-4b1166259/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/dfletch12" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;