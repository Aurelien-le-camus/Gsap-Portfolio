import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
          {`(I am working on projects I'll be able to show here and be proud of it)`}
        </div>
      </div>
    </div>
  );
};

export default Projects;
