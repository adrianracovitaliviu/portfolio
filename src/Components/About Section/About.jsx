import React from 'react'
import './about.css'
import img from '../../Assets/raco.png'
import {VscCloudDownload} from  'react-icons/vsc'
// import cvv from '../../Assets/FRONTEND DEVELOPER.pdf'

const About = () => {
  return (
    <section id='about' className='about section container'>
      <div class="sectionTitle">
      <span class="titleNumber">01 . </span>  
      <h5 class="titleText">Conóceme<div class="underline"><span></span></div></h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          <br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h4>

          <div className="aboutBtn">
            <a className='flex' href="CV_Adrian_Racovita.pdf" download="CV_Adrian_Racovita.pdf" >Descargar CV <VscCloudDownload/></a>
          </div>
        </div>
         <div className="aboutImgDiv">
          <img className='aboutImg' src={img} alt="Adrian Image" />
         </div>
      </div>
    </section>
  )
}

export default About