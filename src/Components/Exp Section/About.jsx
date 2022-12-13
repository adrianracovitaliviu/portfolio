import React from 'react'
import './about.css'
import img from '../../Assets/raco.png'
import {VscCloudDownload} from  'react-icons/vsc'
// import cvv from '../../Assets/FRONTEND DEVELOPER.pdf'

const Exp = () => {
  return (
    <section id='exp' className='about section container'>
      <div class="sectionTitle">
      <span class="titleNumber">04 . </span>  
      <h5 class="titleText">Experiencia y formación <div class="underline"><span></span></div></h5> 
      </div>

      <br />

      <div className="sectionContent grid">
        <div className="textSection">
        <h2 class="titleText">Freelancer<br /><div class="underline"><span></span></div></h2> <br />
        <h3 class="titleText">2020 - Actualidad<br /></h3> <br />
          <h4>
          Si pos la verdad que soy freelancer, no tengo dinero, ayuda.
          <br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h4>
        </div>
      </div>
<br />
      <div className="sectionContent grid">
        <div className="textSection">
        <br/> <h2 class="titleText">IEMPRESA Agencia de Marketing Digital<br /><div class="underline"><span></span></div></h2> <br />
        <h3 class="titleText">Desarrollador Web Junior y Soporte técnico<br /></h3>
        <h3 class="titleText">2022 - Actualidad<br /></h3> <br />
          <h4>
          Si pos la verdad que soy freelancer, no tengo dinero, ayuda.
          <br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Exp