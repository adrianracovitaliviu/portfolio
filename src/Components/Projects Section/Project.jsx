import React, {useState} from 'react'
import './project.css'
import {AiFillYoutube} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import img from '../../Assets/pons.png'
import img2 from '../../Assets/aspiralo.png'
import img3 from '../../Assets/gaming-two.png'
import img4 from '../../Assets/fisio.png'
import img5 from '../../Assets/Thumbnail.png'
import img6 from '../../Assets/rehatrans.png'
import img7 from '../../Assets/soccer.png'
import img8 from '../../Assets/cbg.png'
import img9 from '../../Assets/iddi.png'

const data = [
  {
    id: 1,
    image: img6,
    demo: 'https://www.youtube.com/watch?v=Ei9bZJ-EG8o',
    liveLink: '',
    github: '',
    title: 'Rehatrans',
    desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel. ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech3: 'PHP',
  },

  {
    id: 2,
    image: img9,
    demo: 'https://www.youtube.com/watch?v=wxI-RuDfC8Y',
    liveLink: 'https://cvgeneratorapp.netlify.app/',
    github: 'https://github.com/IsraelAbaho/cv-generator-app',
    title: 'Renovación IDDI UFV',
    desc: 'Frontend application that helps the user to generate CV by filling the fields and clicking download CV Button.',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
  {
    id: 3,
    image: img8,
    demo: 'https://www.youtube.com/c/IsraTech1',
    liveLink: 'https://israelfriendsapp.netlify.app/',
    github: 'https://github.com/IsraelAbaho/friendsListApplication',
    title: 'Club de Baloncesto Getafe',
    desc: 'A friends list application where a user can add friends through the input field, i utilised JS DOM manipulation to come up with this application.',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript (DOM)',
  },
  {
    id: 4,
    image: img,
    demo: 'https://www.youtube.com/watch?v=cL3NQIxgvpc',
    liveLink: 'https://pizzashopclone.netlify.app/',
    github: 'https://github.com/IsraelAbaho/Pizza-Shop-Website',
    title: 'Pons Escuela de Negocios',
    desc: 'This is a client frontend project, with major modules like cart, login & register forms, careers and blog section.',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
  {
    id: 5,
    image: img2,
    demo: 'https://www.youtube.com/watch?v=PKOZKFDEw8Q',
    liveLink: 'https://github.com/IsraelAbaho/Atlantis-The-Royal-Website',
    github: 'https://github.com/IsraelAbaho/navbar',
    title: 'Aspiralo España',
    desc: 'This is a presentation project to the Atlantis The Royal - Dubai for hotel room rates and reservations. It was presented on 18th March, 2022',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
  {
    id: 6,
    image: img3,
    demo: 'https://www.youtube.com/watch?v=AVL_cWI5MIA',
    liveLink: 'https://isratechgamingwebsite.netlify.app/',
    github: '',
    title: 'Icua',
    desc: 'A personal project for gaming gear wesbite. I wanted to implement an add to cart functionality for each item.',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
  },
]

const Project = () => {
  return (
    <section id='projects' className='projects container section'>
      <div class="sectionTitle">
      <span class="titleNumber">03 . </span>  
      <h5 class="titleText">Proyectos <div class="underline"><span></span></div></h5>
      </div>

      <div className="projectContainer grid"> 
          { 
          data.map(({id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4}) =>{
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                <div className="youtubeIcon">
                <a href={demo} target="_blank"><AiFillYoutube className="icon"/></a>
                </div>
                <div className="githubIcon">
                <a href={github} target="_blank"><FiGithub className="icon"/></a>
                </div>
                </div>
              
             <div className="imgDiv">
              <a href={liveLink} target="_blank">
              <img src={image} alt={title} /> 
              </a>
             </div>
             <div className="projectTitle">
              <h3>{title}</h3>
             </div>
             <div className="desc">
              {desc}
             </div>
             <div className="technologies flex">
                <small> {tech1} </small>
                <small> {tech2} </small>
                <small> {tech3} </small>
                <small> {tech4} </small>
                
             </div>
             </div>
            )

           })
           }
      </div>

    </section>
  )
}

export default Project