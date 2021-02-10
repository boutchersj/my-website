import React, { useEffect, useState } from 'react'
import selfie from './selfie.jpg'

export default function Bio() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const breakpoint = 1200
    const adjustBioPic = width > breakpoint ? { 'display': 'block' } : { 'display': 'none' }

    return(
        <div className="bio">
        <img className="bio-pic" style={adjustBioPic} src={selfie} alt="selfie" />
        <div className='bio-description'>
            <h1>Hi! I'm Steven!</h1>
            <p>
                I spent 3 years learning full-stack JavaScript and responsive UI design in my spare time. 
                I studied Spanish Education in college thinking I was putting my language learning aptitude to the best use, 
                but I’ve found myself much more excited by using programming languages to build cool web applications.
            </p>
            <p>
                I put this interest to good use as a QA Analyst, creating proprietary testing technology and using my bug-fixing 
                experience to assess possible root causes of UI bugs found during testing.
            </p>
            <p>
                As a Quality Automation Engineer, I'm learning how to apply my coding skills to the QA world, while still assisting 
                with functional testing efforts in the anti-fraud area of the company.
            </p>
            <p> 
                My fiancée has always been super supportive of all my coding efforts 
                and is my greatest inspiration. When I'm not working or building stuff, 
                I'm enjoying life with her and our pup!
            </p>
        </div>
    </div>
    )
}