import React, { useEffect, useState } from 'react'
import selfie from '../images/selfie.jpg'

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
                <h1>Hey, I'm Steven!</h1>
                <p>
                    My journey into tech began back in 2017 when I started freeCodeCamp's front-end developer track on December 5. Shortly afterward, I met the amazing woman who would become my wife. 
                    Ever since March 14, 2018, Sam and I have been on this riveting adventure called life together. We got married on October 30, 2021, which makes sense to anyone who 
                    knows how much we love Halloween.
                </p>
                <p>
                    The first 2 years of our relationship, I was learning the basics of programming and front-end web development, from HTML and CSS to React and even some Node, just to explore 
                    the back end. Eventually I was able to land a job at the company I'm at now, Fetch Rewards, on their Support team, answering users. My manager at the time recommended Sam apply too, 
                    and she joined me 3 weeks later doing the same thing. Fast-forward a couple of years and we've both left the Support team to grow professionally in other roles.
                    
                </p>
                <p>
                    I left Support to join the QA team and she left it to join the Data Integrity team. We both spent a long time in our roles in those departments and learned a lot about ourselves in the 
                    process. I finally got to try front-end web development at the company through an apprenticeship program, but ultimately decided I liked QA better. Right now, I'm working as an SDET for Fetch 
                    Rewards. Sam has since left the company, and has found an incredible opportunity working for the Girl Scouts doing community engagement work. We're happy to say we're actually excited about 
                    what we do 40 hours a week these days!
                </p>
                <p>
                    We both used to be in the service industry before tech, working retail, food service, tellering, among other things. We've come to find out that working in tech comes with amazing opportunities, not just for 
                    career growth, but for enhancing one's lifestyle. We've been lucky enough to travel to more places, like the Grand Canyon. We've been able to live near Madison, Wisconsin, which is something 
                    both of us had always wanted to do. It's a world away from the service industry jobs we had before this, and it doesn't escape us how fortunate we are. It honestly just makes us want to create more positive change, 
                    because we remember what it was like to feel underappreciated or stuck in a rut, and we want to make sure nobody we work with ever feels that way.
                </p>
                <p>
                    The one thing we've both taken away from this journey is that we've been able to accomplish so much more together than we were able to apart. We came into this relationship feeling uncertain 
                    about our futures, and we've grown together in ways that have been incredible to look back on, personally, professionally, and emotionally. I'm a big believer in learning to share my whole self with 
                    the world. I'm not perfect at it, but as the world becomes more open to mixing work and personal life, I think we need to embrace the reality that they were never separate in the first place.
                </p>
            </div>
        </div>
    )
}