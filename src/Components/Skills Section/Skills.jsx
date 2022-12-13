import React from 'react'
import './skill.css'
import {TbBrandReactNative} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoSass} from 'react-icons/io'
import {SiCss3, SiShopify} from 'react-icons/si'
import {FaHtml5, FaChessKnight} from 'react-icons/fa'
import {DiPhp} from 'react-icons/di'
import {SiWix} from 'react-icons/si'
import {FaGitSquare} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsWordpress} from 'react-icons/bs'
import {SiMysql} from 'react-icons/si'
import {RiTeamFill, RiMoneyEuroCircleFill} from 'react-icons/ri'
import {MdSupportAgent} from 'react-icons/md'
import ReactCountryFlag from "react-country-flag"


const Skills = () => {
  return (
    <section id='skills' className='skills container section'>
       <div class="sectionTitle">
      <span class="titleNumber">02 . </span>  
      <h5 class="titleText">Habilidades <div class="underline"><span></span></div></h5>
      </div>

      {/* skillContainer */}
      <div className="skillsContainer grid">

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Desarrollo Web</h2>
            <span className="subTitle">
              +2 años de experiencia 
              <br />
              creando páginas con éxito.
            </span>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
           <div className="singleSkill">
           <div className="iconBox flex">
            <TbBrandReactNative className='icon'/>
            </div>
            <span className='skillName'>React</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <IoLogoJavascript className='icon'/>
            </div>
            <span className='skillName'>JavaScript</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <IoLogoSass className='icon'/>
            </div>
            <span className='skillName'>Sass</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <SiCss3 className='icon'/>
            </div>
            <span className='skillName'>CSS</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <FaHtml5 className='icon'/>
            </div>
            <span className='skillName'>HTML</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <DiPhp className='icon'/>
            </div>
            <span className='skillName'>PHP</span>
           </div>
 
          </div>
        </div>

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Cualidades</h2>
            <span className="subTitle">
              ¿Por qué trabajar conmigo?
            </span>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
           <div className="iconBox flex">
            <RiTeamFill className='icon'/>
            </div>
            <span className='skillName'>Trabajo<br />en equipo</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <RiMoneyEuroCircleFill className='icon'/>
            </div>
            <span className='skillName'>Marketing<br />y ventas</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <MdSupportAgent className='icon'/>
            </div>
            <span className='skillName'>Atención al<br />cliente</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <FaChessKnight className='icon'/>
            </div>
            <span className='skillName'>Liderazgo<br />y ambición</span>
           </div>
          </div>
        </div>

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">También conozco...</h2>
            <span className="subTitle">
              Siempre hay algo más por aprender
            </span>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
           <div className="singleSkill">
            <div className="iconBox flex">
            <SiWix className='icon'/>
            </div>
            <span className='skillName'>Wix</span>
           </div>
           <div className="singleSkill">
            <div className="iconBox flex">
            <SiShopify className='icon'/>
            </div>
            <span className='skillName'>Shopify</span>
           </div>
           <div className="singleSkill">
            <div className="iconBox flex">
            <BsWordpress className='icon'/>
            </div>
            <span className='skillName'>Wordpress</span>
           </div>
           <div className="singleSkill">
            <div className="iconBox flex">
            <SiMysql className='icon'/>
            </div>
            <span className='skillName'>MySQL</span>
           </div>
          </div>
        </div>
        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Idiomas</h2>
            <span className="subTitle">
              
            </span>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
           <div className="singleSkill">
            <div className="iconBox flex">
            <ReactCountryFlag countryCode="ES"
                svg
                style={{
                    width: '35px',
                    height: '28px',
                }}
                title="ES"
            className='icon'/>
            </div>
            <span className='skillName'>Nativo</span>
           </div>

           <div className="singleSkill">
            <div className="iconBox flex">
            <ReactCountryFlag countryCode="RO"
                svg
                style={{
                    width: '35px',
                    height: '28px',
                }}
                title="RO"
            className='icon'/>
            </div>
            <span className='skillName'>Nativo</span>
           </div>

           <div className="singleSkill">
            <div className="iconBox flex">
            <ReactCountryFlag countryCode="GB"
                svg
                style={{
                    width: '35px',
                    height: '28px',
                }}
                title="GB"
            className='icon'/>
            </div>
            <span className='skillName'>Nivel Alto</span>
           </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills