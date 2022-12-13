import React from 'react'
import './home.css'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {TbChevronsDown} from 'react-icons/tb'
import {AiFillGithub} from 'react-icons/ai'
import {TbBrandTwitter} from 'react-icons/tb'
import {AiFillYoutube} from 'react-icons/ai'

const Home = () => {
  return (
    <section id='home' className='home section'>
      <div className="leftIcons">
        <div className="socials grid">
            <a href="https://github.com" target="_blank"><AiFillGithub className="icon" /></a>
            <a href="https://twitter.com/Aba_graphics" target="_blank"><TbBrandTwitter className="icon"/></a>
           <a href="https://www.youtube.com/c/IsraTech1" target="_blank"> <AiFillYoutube className="icon"/></a>
           <div className="line"></div>
        </div>
      </div>
      
      <div className="container homeContent">
        <span className="introText">
         Buenos días! Mi nombre es,
        </span>
        <h1 className="title">
          Adrian Racovita
        </h1>
        <span className="subTitle">
          Desarrollo páginas web ayudando a maximizar la visibilidad y las ventas online de mis clientes.
        </span>
        <p className="homeParagraph">
        Una web para cubrir todas tus necesidades
        </p>

        <div className="lowerHomeSection">
          <button className='contactBtn '>
            <a className='flex'  href="#contact">
            Ponte en contacto <TbArrowBigRightLines className='icon'/>
            </a>
          </button>

          <div class="scrollDiv">
              <a href="#about" className='flex'> <h6 class="scroll">Conóceme <TbChevronsDown className='icon'/></h6></a>   
           </div>
        </div>
      </div>

      <div className="rightEmail">
        <div>
          <div className='emailAddress'>
            <a href="https://mailto:adrianliviuracovita@gmail.com" target="_blank">adrianliviuracovita@gmail.com</a>
          </div>
           <div className="line"></div>
        </div>
      </div>

    </section>
  )
}

export default Home