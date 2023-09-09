import React, { useEffect, useState } from 'react';
import HTML from '../../assets/HTML_logo.png';
import CSS from '../../assets/CSS_logo.png';
import JS from '../../assets/JS_logo.png';
import BO from '../../assets/Bootstrap_logo.png';
import RE from '../../assets/React_logo.png';
import NO from '../../assets/Nodejs_logo.png';
import MO from '../../assets/mongodb_logo.png';
import SQ from '../../assets/SQL_logo.png';
import GI from '../../assets/Git_logo.png';
import RP from '../../assets/Rapid_logo.png';
import VE from '../../assets/Ver_logo.png';
import FI from '../../assets/Figma_logo.png';
import EX from '../../assets/Express_logo.png';
import VS from '../../assets/Visual_Studio_Code_logo.png';
import './services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <section id='services'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className='container services__container'>
        
          {/* Adjust the duration and delay values as needed */}
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={HTML} alt='HTML Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={CSS} alt='CSS Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={BO} alt='Bootstrap Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={JS} alt='JavaScript Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={RE} alt='React Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={NO} alt='Node.js Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={EX} alt='Express Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={MO} alt='MongoDB Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={SQ} alt='SQL Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={VS} alt='Visual_Studio Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={VE} alt='Version-control Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={GI} alt='Git Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={RP} alt='Rapid-miner Logo' />
          </div>
          <div className={`item hidden ${isVisible ? 'show' : ''}`}>
            <img src={FI} alt='Figma Logo' />
          </div>
          
      </div>
    </section>
  );
}

export default Services;
