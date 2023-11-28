import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import React from 'react'

const FootNote = () => {
  return (
<div id='major-foot-note'>
    <div id='foot-note'>
            <div id='about-us'>
              <h4 className='foot-note-header'>About Us</h4>
              <p className='about-us'>
                  Umayyfa Communication Links key activities comprise advertising, Public Relations, Media services, ICT, Publishing, contracts, Translations, Research, Supply, networking, LAN switches, WAN/VPN routers, 
                  IT security, structured cabling, UPS products and telecommunication services.
              </p>
            </div>

            <div id='feature'>
                <div id='inner-feature'>
                    <h4 className="foot-note-header">Features</h4>
                    <ul id="features-list">
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Testimonials</li>
                        <li>COntact Us</li>
                    </ul>
                </div>
            </div>

            <div id='follow-us'>
                <h4 className="foot-note-header">Follow Us</h4>
                <ul id='footer-social-list'>
                      <li><a href="https://fb.me/umayyfa"><BiLogoFacebook /></a></li>
                      <li><a href="https://twitter.com/umayyfa"><AiOutlineTwitter /></a></li>
                      <li><a href="https://instagram.com/umayyfa"><BiLogoInstagram /></a></li>                  
                      <li><a href="http://umayyfa.com/linkedin.com/in/umayyfa-communication-links-92b76018a"><BiLogoLinkedin /></a></li>
                </ul>
            </div>

            <div id="sub-letter">
                <h4 className="foot-note-header">Subscribe Newsletter</h4>
                <div id='sub-inner-div'>
                  <input type="email" name="" id="" placeholder='Enter Email' className='sub'/>
                  <button className="sub" type="submit">Send</button>
                </div>
            </div>
        </div>

    <div id='line'></div>

    <div id='copy-right'>
          Copyright ©{Date().substring(11, 15)} All rights reserved | 
          This template is made with  by 
          <a href="http://" target="_blank">  Colorlib</a>
    </div>
</div>
  )
}

export default FootNote