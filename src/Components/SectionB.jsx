import React from 'react'

const WhatWeStandFor = () => {
  return (
    <div id='what-we-stand-for'>
        <div id='values' className='black-background'>
            <div className='underlay'>01</div>
                <div className="overlay">
                    <h1 >Our Values</h1>
                    <ul id='value-list'>
                        <li className='value'>Commitment</li>
                        <li className='value'>Customer Value</li>
                        <li className='value'>Team Work</li>
                        <li className='value'>Professionalism</li>
                        <li className='value'>Flexibility/Adaptability</li>
                        <li className='value'>Social Responsibility</li>
                    </ul>
                </div>
        </div>

        <div id="mission" className='black-background'>
        <div className='underlay'>02</div>
           <div className="overlay">
                <h1>Our Mission</h1>
                    <p>
                        To help our client established and maintain a favorable reputations, also to assist our client to build a reliable, secure, manageable and 
                        flexible IT infrastructure that established a foundation for clients to meet their business objectives.
                    </p>
           </div>
        </div>

        <div id="objectives" className='black-background'>
            <div className='underlay'>03</div>
            <div className='overlay'>
                <h1>Our Objectives</h1>
                <p>Our Objectives are to assist with various implementations of their projects, 
                    and we are having confidence in our ability to generate the consensus and commitments necessary to succeed.</p>

            </div>
        </div>
    </div>
  )
}

export default WhatWeStandFor