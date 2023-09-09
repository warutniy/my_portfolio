import { useCallback, useEffect, useRef, useState } from "react";
import './testimonials.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Codecademy_Asyn from '../../assets/Certificate_Codecademy_Asyn.png';
import Codecademy_CSS from '../../assets/Certificate_Codecademy_CSS.png';
import Codecademy_JS from '../../assets/Certificate_Codecademy_JS.png';
import Codecademy_Request from '../../assets/Certificate_Codecademy_Request.png';
import Codecademy_SQL from '../../assets/Certificate_Codecademy_SQL.png';
import Codecademy_React from '../../assets/Certificate_Codecademy_React.jpg';
import Generation_Cohort4 from '../../assets/Certificate_Generation.jpg';
import Data1 from '../../assets/Certificate_Data.png';
const Testimonials = () => {
    const slides = [
        {url: Generation_Cohort4, title: "Generation", 
            descriptionHeader:<h1>Junior Software Developer Program (Cohort4)</h1>,
            descriptionContent:<p>A 15 weeks full-time bootcamp,supported by The Ministry of Higher Education,Science, Research and Innovation and Microsoft Thailand from 13 February-30 May 2024</p> 
        },
        {url: Data1, title: "THAILAND PROFESSIONAL QUALIFICATION INSTITUTE", 
            descriptionHeader:<h1>THAILAND PROFESSIONAL QUALIFICATION INSTITUTE</h1>,
            descriptionContent:<p>I has successfully completed the Professional Qualification Level 3
            {/* <br/>Sector : Digital Industry */}
            <br/>Sub-Sector : Data Science
            <br/>Occupation : Data Analyst</p> 
        },
        {url: Codecademy_SQL, title: "Codecademy_SQL", 
            descriptionHeader:<h1>SQL</h1>,
            descriptionContent:<p>learned how to manage large datasets and analyze real data using the standard data management language.</p> 
        },
        {url: Codecademy_React, title: "Codecademy_React", 
            descriptionHeader:<h1>React</h1>,
            descriptionContent:<p>Learned to use JSX, the basic syntax, React Components, use Hooks, function components, apply styles to React apps and choose the right approach to keep styles organized and manageable, create and interact with forms in React applications.</p> 
        },
        {url: Codecademy_JS, title: "Codecademy_JS", 
            descriptionHeader:<h1>JavaScript</h1>,
            descriptionContent:<p>Learned how to use JavaScript — a powerful and flexible programming language for adding website interactivity.</p> 
        },
        {url: Codecademy_Request, title: "Codecademy_Request", 
            descriptionHeader:<h1>Learn JavaScript: Requests</h1>,
            descriptionContent:<p>Asynchronously request data using the async/await syntax to dynamically use data from APIs.</p> 
        },
        {url: Codecademy_Asyn, title: "Codecademy_Asyn", 
            descriptionHeader:<h1>JavaScript: Asynchronous Programming!</h1>,
            descriptionContent:<p>Learned create efficient asynchronous programs using Promises and the async/await syntax.</p> 
        },
        {url: Codecademy_CSS, title: "Codecademy_CSS", 
            descriptionHeader:<h1>Learn CSS</h1>,
            descriptionContent:<p>Learned how to implement elegant transitions, create new layouts and serve users with dynamic needs.</p> 
        }
    ]
    
    return (
        <>
            <section className="img-slider-3" id="testimonials">
                <h5>Most recent learning</h5>
                <h2>Certificates</h2>
                <div className="my-journey-slider-container">
                    <Slider 
                        slides={slides} 
                        parentWidth={900} 
                    />
                </div>
            </section>
        </>
    );
};

const Slider = ({slides, parentWidth}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeSlideTab, setActiveSlideTab] = useState(0);
    const timeRef = useRef();

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setActiveSlideTab(newIndex)
    }

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setActiveSlideTab(newIndex)
    }, [currentIndex, slides]);

    const goToSlide = (slideindex) => {
        setCurrentIndex(slideindex)
        setActiveSlideTab(slideindex)
    }

    //style background image
    const myJourneySlidesStyles = (slideIndex) => ({
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: `${parentWidth}px`,
    })

    const myJourneySlidesContainerStyles = () => ({
        width: parentWidth * slides.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`,
    });

    useEffect(() => {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(() => {
            goToNext()
        }, 4000);

        return () => clearTimeout(timeRef.current);
    }, [goToNext]);
    
    return (
        <div className="my-journey-slider">
            <div>
                <div className="my-journey-previous-arrow" onClick={goToPrevious}>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className="my-journey-next-arrow" onClick={goToNext}>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>

            <div className="my-journey-slides-container-overflow">
                <div
                    className="my-journey-slides-container"
                    style={myJourneySlidesContainerStyles()}
                >
                    {slides.map((slide, slideIndex) => (
                        <div className="my-journey-slides-content">
                            <div className="my-journey-slides-img-container">
                                <div
                                    key={slideIndex}
                                    style={myJourneySlidesStyles(slideIndex)}
                                    className="my-journey-slides-img"
                                ></div>
                            </div>
                            <div className="my-journey-slides-description">
                                {slides[slideIndex].descriptionHeader}
                                {slides[slideIndex].descriptionContent}
                            </div>
                        </div>
                    ))}    
                </div>
            </div>

            <div className="my-journey-slides-tab-container">
                {slides.map((slide,slideIndex) => (
                    <div 
                        key={slideIndex} 
                        className={`my-journey-slides-tab ${activeSlideTab === slideIndex ? 'my-journey-active-slide-tab' : ''}`}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        <button></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;