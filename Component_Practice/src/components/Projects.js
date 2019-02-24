import projects from '../data/projects.json';
import React from 'react'
import Project from './Project'


const Projects = () => {
    return(
     
        <section id="projects">

            <a href="#">
                <i class="far fa-arrow-alt-circle-up"></i>
            </a>

      <header >
        <h1>My Projects</h1>
        <p>These are some of my projects</p>
      </header>
       
        <div><Project {...projects.allProjects[0]}/></div>
        <div><Project {...projects.allProjects[1]}/></div>
        <div><Project {...projects.allProjects[2]}/></div>
        <div><Project {...projects.allProjects[3]}/></div>
      
     
    </section>
     
    )
  }
  
  export default Projects



