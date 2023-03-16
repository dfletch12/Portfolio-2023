import React from 'react';
import './index.scss';
import LogoTitle from '../../assets/images/D-logo.svg';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';


const Home = () => {
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1 className="title">Hi, <br/> I'm  <br/>
                 {/* <img src={ LogoTitle } alt='developer' /> */}
                  Dalton
                 <br/>
                 web developer
                 </h1>
                 <h2>Full Stack Developer</h2>
                 <Link to='/contact' className='flat-button'> CONTACT ME </Link>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home