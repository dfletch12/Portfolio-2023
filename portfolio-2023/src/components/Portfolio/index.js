import Loader from 'react-loaders'
import './index.scss'
import longevityImg from '../../assets/images/longevity.png'
import blueOcean from '../../assets/images/BO-SS.png'
import cssCheat from '../../assets/images/css-cheatsheet-ss.png'
import landingPage from '../../assets/images/landing-page-ss.png'
import studyGuide from '../../assets/images/landing-page-ss.png'


const Portfolio = () => {
    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1 className="title">Portfolio</h1>
                    <ul>
                        <div>
                            <a href="https://rocky-thicket-55053.herokuapp.com/">
                                <img className='ss' src= {longevityImg} alt='A workout building app'></img>
                            </a>
                            <p> This app was designed to be a workout tracker/planner and to help you discover new excercises. The code is available on <a href='https://github.com/alexisbenavidez99/workout-tracker'>Github</a>. </p>
                        </div>
                        <div>
                            <a href="https://alexandriawhite.github.io/Blue-Ocean/">
                                <img className='ss' src= {blueOcean} alt="A dating app." ></img>
                            </a>
                            <p> This app was designed to be a dating app. The code is available on <a href='https://github.com/alexandriawhite/Blue-Ocean'> GitHub </a>. </p>
                        </div>
                        <div>
                            <a href="https://dfletch12.github.io/CSS-Cheat-Sheet/">
                                <img className='ss' src= {cssCheat} alt="Custom page for displaying CSS snippets." ></img>
                            </a>
                            <p> This app is practicing my skills in CSS and has a few snippets of demonstration code. View it on my <a href='https://github.com/dfletch12/CSS-Cheat-Sheet'> GitHub. </a> </p>
                        </div>
                            <p> For some examples of my backend work try some of these links. A <a href='https://github.com/dfletch12/social-networking-api-'>social media api,</a> <a href='https://github.com/dfletch12/Ecommerce-Architecture'>ecommerce architecture</a> or an  <a href='https://github.com/dfletch12/Employee-CMS'>employee cms</a>. </p>
                        <div>

                        </div>
                    </ul>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio