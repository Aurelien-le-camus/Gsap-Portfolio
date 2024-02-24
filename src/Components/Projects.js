import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../cssAnimations/projectStyle.css";
import Language from './Language';
import TSlogo from "../images/ts.png";
import Reactlogo from "../images/react.png";
import HTMLlogo from "../images/html.png";
import CSSlogo from "../images/css.png";
import firstPicture from "../images/firstPicture.png";
import secondPicture from "../images/secondPicture.png";
import thirdPicture from "../images/thirdPicture.png";
import construction from "../images/construction.png";

const styles = {
  main: {
    flexDirection: "column",
    display: "flex",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  container: {
    flexDirection: "column",
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    overflow: 'hidden',
    textAlign: 'center',
    marginTop: '100px',
    zIndex: 2,
  },
};

const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div className="mainContainer">
          <div className="imagesContainer">
            <div data-aos="fade-up" data-aos-delay="100" className="image" style={{ backgroundImage: `url(${firstPicture})`, backgroundSize: 'cover' }}>
              image 1
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="image" style={{ backgroundImage: `url(${secondPicture})`, backgroundSize: 'cover' }}>
              image 2
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="image" style={{ backgroundImage: `url(${thirdPicture})`, backgroundSize: 'cover' }}>
              image 3
            </div>
          </div>
          <div className="textContainer">
            <div className="titleContainer" data-aos="fade-zoom-in" data-aos-delay="450">
              Domestia
            </div>
            <div className="detailsContainer" data-aos="fade-zoom-in" data-aos-delay="500">
              Domestia is a platform that connects home service professionals with individuals. I worked on the web application for professionals in accordance with client and professional web and mobile platforms. This project is one we undertake from our 3rd to 5th year at Epitech. Its aim is to teach us the creation of a potential startup, project management, evolution, and adaptation to circumstances such as remote work during our journey abroad.
            </div>
            <div className="infoContainer" data-aos="fade-zoom-in" data-aos-delay="550">
              3 years of development
            </div>
            <div className="languagesContainer" data-aos="fade-zoom-in" data-aos-delay="650">
              <div>
                <Language logo={HTMLlogo} language={"HTML"} color={"#e85328"} />
              </div>
              <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <Language logo={CSSlogo} language={"Css"} color={"#254de5"} />
              </div>
              <div style={{ marginRight: '2%' }}>
                <Language logo={TSlogo} language={"TS"} color={"#6fa2d7"} />
              </div>
              <div>
                <Language logo={Reactlogo} language={"React"} color={"#23a5bd"} />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-zoom-in" data-aos-delay="300" data-aos-offset="0">
          <img src={construction} alt="construction" />
        </div>
        <div style={{ marginTop: '3%', fontSize: '80px', fontWeight: 700, display: 'flex', flexDirection: 'row' }}>
          <div data-aos="fade-up" data-aos-delay="600">
            Currently
          </div>
          <div data-aos="fade-up" data-aos-delay="650" style={{ marginLeft: '2%', marginRight: '2%' }}>
            in
          </div>
          <div data-aos="fade-up" data-aos-delay="700" style={{ marginRight: '2%' }}>
            construction
          </div>
          <div data-aos="fade-up" data-aos-delay="800">
            .
          </div>
          <div data-aos="fade-up" data-aos-delay="900">
            .
          </div>
          <div data-aos="fade-up" data-aos-delay="1000">
            .
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1100" style={{ fontSize: '20px', display: 'flex' }}>
          {`(More to come soon)`}
        </div>
      </div>
    </div>
  );
};

export default Projects;
