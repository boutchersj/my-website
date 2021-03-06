import React, { useState, useEffect } from 'react'
import certificates from '../data/certificates.json'

function Certificates() {
//Monitor Viewport Size
    const [width, setWidth] = useState(window.innerWidth);
        
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const breakpoint = 640
    const adjustFont = width < breakpoint ? { 'fontSize': '60%' } : { 'fontSize': '100%' }
//Set Category
    const [certCategory, setCertCategory] = useState("qaautomation")
    const handleCategory = event => {
        const { id } = event.target
        setCertCategory(id)
    }
//Set Name
    const [certName, setCertName] = useState("Testing Ruby with RSpec: The Complete Guide")
    const handleName = event => {
        const { id } = event.target
        setCertName(id)
    }
//Set Category Images
    let certImages = certificates[certCategory].map(cert => {
        return (
            <img id={cert.displayName} onClick={handleName} className="portfolioImage" src={require(`../images/certificates/${cert.title}.png`)} alt={`${certCategory} - ${cert.displayName}`} />
        )
    })
//Set Current Certificate
    const currentCert = certificates[certCategory].find(cert => cert.displayName === certName)
        ? certificates[certCategory].find(cert => cert.displayName === certName)
        : certificates[certCategory][0]
    const listItems = currentCert.bulletPoints.map( item => { return (<li>{item}</li>) })

    return(
        <div className="certificates-container">
            <h3 className="certificates-title">Learning Certificates</h3>
            <div className='certificatesNav'>
                <p id='webdevelopment' onClick={handleCategory} className='btn-cert' style={adjustFont}>Web Development</p>
                <p id='functionalqa' onClick={handleCategory} className='btn-cert' style={adjustFont}>Functional QA</p>
                <p id='qaautomation' onClick={handleCategory} className='btn-cert' style={adjustFont}>QA Automation</p>
            </div>
            <div className='certificates'>
                <div className='imageWindow'>
                    {certImages}
                </div>
                <div className='descriptionWindow'>
                    <h2>{currentCert.displayName}</h2>
                    <div className='descriptionBody'>
                        <p>{currentCert.subtitle}</p>
                        <p>{currentCert.summary}</p>
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates