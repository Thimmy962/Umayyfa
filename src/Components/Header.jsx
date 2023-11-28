import React from 'react'
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'

const Header = () => {
  return (
    <div id='header'>
        <div id='div-1'>
            <div className="contacts">
                <span>
                    <strong>Tel:</strong> <a className='aa'href="http://">+2348055614973</a>
                </span>
                <span>
                    <strong>Email:</strong> <a href="http://">info@umayyfa.com</a>
                </span>
            </div>
            <div className="socials">
                <ul className='social-list'>
                    <li><a href="https://fb.me/umayyfa"><BiLogoFacebook /></a></li>
                    <li><a href="https://twitter.com/umayyfa"><AiOutlineTwitter /></a></li>
                    <li><a href="https://instagram.com/umayyfa"><BiLogoInstagram /></a></li>
                    <li><a href="http://umayyfa.com/linkedin.com/in/umayyfa-communication-links-92b76018a"><BiLogoLinkedin /></a></li>
                </ul>
            </div>
        </div>

        <div id="div-2">
            <div id='only-child'>
                <div id='logo-name'>
                    <img src="http://umayyfa.com/images/logo.jpg" alt="logo" className='logo'/>
                    <h6>Umayyfa</h6>
                </div>
                <ul id='nav'>
                    <li><a className='nav-link'href="#">Home</a></li>
                    <li><a className='nav-link' href="#section-b">Services</a></li>
                    <li><a className='nav-link' href="#what-we-stand-for">About</a></li>
                    <li><a className='nav-link' href="#projects">Work</a></li>
                    <li><a className='nav-link' href="#blog">Blog</a></li>
                    <li><a className='nav-link' href="#contact">Contacts</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header