import React from 'react'
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'

const Projects = () => {
  return (
    <div id='product-component'>
    <div id='projects-div'>
        <div id="project-header">
            <div id='projects'>Projects</div>
            <div className='underline'></div>
        </div>
        <div id="write-up">
            We have years of experience in different sectors, which placed us in a better position to handle your business needs.
        </div>

        <div id="projects-list">
            <div className='each-project'>
                        <img src="http://umayyfa.com/images/uscoega.jpg" alt="USCCOEGA" />
                        <div className="project-overlay">
                            <p>Web design for a University</p>
                        </div>
            </div>

            <div className='each-project each-project2'>
                <img src="http://umayyfa.com/images/agric_view.jpg" alt="AGRIC" />
                <div className="project-overlay">
                    <p>Agricultural Sensitization</p>
                </div>
            </div>
            <div className='each-project each-project3'>
                <img src="http://umayyfa.com/images/northeast.jpg" alt="NorthEast" />
                
                <div className='project-overlay'>
                    <p className='overlay1'>Magazine</p>
                    <p className='overlay2'>Magazine Magazine</p>
                </div>
            </div>
        </div>

        <button id='project-button'>SHOW ALL WORKS</button>  
    </div>

    <div id="our-team">
        <div id="our-team-header">
            <div id='projects'>Our Team</div>
            <div className='underline underline-2'></div>
        </div>
        <div id='team-member-info'>
            <div className='team-member'>
                <img src="http://umayyfa.com/images/ceo.jpg" alt="Umar`s Picture" className='member-picture'/>
                <div className='name'>Umar Ibrahim Usman</div>
                <div className='position'>CHIEF EXECUTIVE OFFICER</div>
                <ul id='project-social-list'>
                    <div className='project-list'>
                        <li><a href="https://fb.me/umayyfa"><BiLogoFacebook /></a></li>
                    </div>
                    <div className="project-list">
                        <li><a href="https://twitter.com/umayyfa"><AiOutlineTwitter /></a></li>
                    </div>
                    <div className="project-list">
                        <li><a href="https://instagram.com/umayyfa"><BiLogoInstagram /></a></li>
                    </div>
                    
                    <div className="project-list">
                        <li><a href="http://umayyfa.com/linkedin.com/in/umayyfa-communication-links-92b76018a"><BiLogoLinkedin /></a></li>
                    </div>
                </ul>
            </div>

            <div className='team-member'>
                <img src="http://umayyfa.com/images/md.jpg" alt="Nura`s Picture" className='member-picture'/>
                <div className='name'>Nura Ado Ahmad</div>
                <div className='position'>General Manager</div>
                <ul id='project-social-list'>
                    <div className='project-list'>
                        <li><a href="https://fb.me/umayyfa"><BiLogoFacebook /></a></li>
                    </div>
                    <div className="project-list">
                        <li><a href="https://twitter.com/umayyfa"><AiOutlineTwitter /></a></li>
                    </div>
                    <div className="project-list">
                        <li><a href="https://instagram.com/umayyfa"><BiLogoInstagram /></a></li>
                    </div>
                    
                    <div className="project-list">
                        <li><a href="http://umayyfa.com/linkedin.com/in/umayyfa-communication-links-92b76018a"><BiLogoLinkedin /></a></li>
                    </div>
                </ul>
            </div>

        </div>
    </div>

    <div id='hire-us'>
        <div>Hire Us & Let`s Get Started</div>
    </div>
    </div>
  )
}

export default Projects