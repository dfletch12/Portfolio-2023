import './index.scss'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import profilePic from '../../assets/images/profile-pic.png'

const About = () => {
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <img src={profilePic} alt="Dalton" />
                    <h1 className="title">About Me</h1>
                    <h2>Full Stack Developer</h2>
                    <p className='AboutMe'>Hi, I'm Dalton, a full stack web developer. I have a passion for creating websites and web applications. I have a strong background in HTML, CSS, JavaScript, React, Node.js, and SQL. I have a strong desire to learn and grow as a developer. I am currently looking for a full-time position as a web developer.</p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faDatabase} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default About