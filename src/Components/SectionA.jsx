import React, { useEffect } from 'react'
import {Typewriter, Cursor} from 'react-simple-typewriter'

const WhatWeDO = () => {
  return (
    <>
      <div id='section-a'>

            <div id='content'>
                <div>
                    <p className='typewriter'>
                        <span>
                        <Typewriter
            words={['Welcome To Umayyfa Communiaction Links','Consultancy Services','ICT Services', 'Supply Services']}
            loop={5}
            cursor
            cursorStyle=''
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={5500}
          />
                        </span>
                        <Cursor /></p>
                    <p>Exceeding Client Satisfaction motivates Us</p>
                </div>
            </div>
      </div>
      <div id="section-b">
        <div className='section-b-a'>
            <div id='first-div-inner-div'>
                <div id='circle'>
                    <div id="inner-triangle"></div>
                </div>
                <h1 className='black-background h3 h1 white'>Welcome To Umayyfa Communication Links</h1>
            </div>
            <div id='img-container'>
                <img src="http://umayyfa.com/images/about_1.jpg" alt="Logo" id='section-b-img'/>
            </div>
        </div>

        <div className='section-b-b'>
            <div>
                <h3 className='black-background h3 white'>ICT Services</h3>
                <p className='black-background under-white'>We are experts in Software development, web design, and internet development, supply of hardware and networking services. We establish, manage and maintain telecommunication systems.
                    We provide information management services to Government agencies, corporate bodies and private organizations.</p>
            </div>
            
            <div>
                <h3 className='black-background h3 white'>Media Services</h3>
                <p className='black-background under-white'>We provide efficient advertising services, branding, public relations services, copy writing, 
                    media monitoring and general impression management services to individuals and corporate organizations.</p>
            </div>

            <div>
                <h3 className='black-background h3 white'>Marketing & Trade Services</h3>
                <p className='black-background under-white'>We partner with manufacturing and trading companies across the world that are willing to expand their markets via our channel of agents and vendors across West Africa and beyond. 
                    Hence we carry on business as general merchants.</p>
            </div>

            <div>
                <h3 className='black-background h3 white'>Import & Export</h3>
                <p className='black-background under-white'>Our import and export services facilitate cost-effective and efficient movement of goods globally including fast tracking of their delivery.</p>
            </div>

            <div>
                <h3 className='black-background h3 white'>Engineering Services</h3>
                <p className='black-background under-white'>One of Umayyfa's most commonly delivered engineering services is the installation of water boreholes for commercial and domestic use. 
                    It drills for public water supply companies, water bottlers and brewers. 
                    It serves farmers for crop irrigation and general water supplies, as well as hospitals, schools and domestic private water supplies.</p>
            </div>

            <div>
                <h3 className='black-background h3 white'>Real Estate and Property Development</h3>
                <p className='black-background under-white'>...</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDO