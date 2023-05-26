import React from 'react';
import './services.css';
import {BsPatchCheckFill} from 'react-icons/bs';
const Services = () => {
  return (
    <section id='services'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>HTML</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>CSS</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>JavaScript</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>Bootstrap</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>React</h4>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Backend Developmentt</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>Node JS</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>Express.js</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>PHP</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>MongoDB</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>MySQL</h4>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className='service__head'>
            <h3>Data Analysis</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>Spreadsheets</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>Looker Studio</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>SQL</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>RapidMiner</h4>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <h4>R Programming</h4>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services