import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { SlGraduation} from "react-icons/sl";
import { MdWorkOutline } from "react-icons/md";


const Experience = () => {
  return (
    <section id="experience">
      <h5>My journey</h5>
      <h2>Qualification</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <article className="experience__details_head">
            <SlGraduation className="experience__details-icon_head" />
            <div>
              <h2>My Education</h2>
            </div>
          </article>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h3>Bachelor of Engineering</h3>
                <h4>Kasetsart University</h4>
                <small className="text-light">2009-2012</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h3>Junior Software Developer Program Cohort 4</h3>
                <h4>Generation Thailand</h4>
                <small className="text-light">Feb - May 2023</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <article className="experience__details_head">
            <MdWorkOutline className="experience__details-icon_head" />
            <div>
              <h2>My Work</h2>
            </div>
          </article>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h3>Business Development</h3>
                <h4>Family owned business ( Fishing Industry )</h4>
                <small className="text-light">2020-2022</small>
              </div>
            </article>
           
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h3>Machine Improvement Engineer</h3>
                <h4>The Siam Cement Public Company Limited (SCG)/ Saraburi</h4>
                <small className="text-light">2016-2019</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* END OF BACKEND */}
    </section>
  );
};

export default Experience;
