import React from 'react'
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
                {/* <div id='logo-name'>
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
                </ul> */}

                <Navbar expand="lg" className="bg-body-tertiary" id='navbar-fullwidth'>
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Brand href="#home">
                        <div id="logo-name">
                        <img src="http://umayyfa.com/images/logo.jpg" alt="logo" className='logo'/>
                        <h6>Umayyfa</h6>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#section-b">Services</Nav.Link>
                        <Nav.Link href='#what-we-stand-for'>About</Nav.Link>
                        <Nav.Link href='#projects'>Work</Nav.Link>
                        <Nav.Link href='#blog'>Blog</Nav.Link>
                        <Nav.Link href='#contact'>Contacts</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        </div>
    </div>
  )
}

export default Header