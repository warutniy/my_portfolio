import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The activity tracking web application built with MERN stack',
    github: 'https://github.com/warutniy/project_groupA-2',
    demo: 'https://frontend-group-a-2.vercel.app/'
  },

  {
    id: 2,
    image: IMG2,
    title: 'The Find Your Hat project from Codecademy',
    github: 'https://github.com/warutniy/career-changer-react-assessment',
    demo: 'https://replit.com/@Warutniy/JSD04Assessment'
  },

  {
    id: 3,
    image: IMG3,
    title: 'The Colmar Academy project from Codecademy',
    github: 'https://github.com/warutniy/colmar',
    demo: 'https://colmar-mocha.vercel.app/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },

];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            );
          })
        } 
      </div>
    </section>
  )
}

export default Portfolio