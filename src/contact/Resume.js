import React from 'react'
import resume from './Resume - July 2022.pdf'

export default function Resume() {
    return(
        <div className="resume">
            <div className="resume-container">
                <h2>Check out my resume!</h2>
                <div className='resume-link-container'>
                    <a className="resume-link" href={resume} download>
                        <i className="fa fa-download"></i> Download
                    </a>
                </div>
            </div>
        </div>
    )
}