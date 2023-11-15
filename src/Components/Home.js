import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../font/font.css";
import "../cssAnimations/homeAnimationsHover.css";
import mountainsBackground from "../images/mountainsBackground.jpg";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const styles = {
  main: {
    flexDirection: "column",
    display: "flex",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  container: {
    flexDirection: "row",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    overflowX: 'hidden',
    textAlign: 'center',
    zIndex: 3,
  },
};

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div style={styles.main}>
      <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" className="backgroundLayer" style={{ backgroundImage: `url(${mountainsBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />
      <div style={{ backgroundColor: '#242424', opacity: '0.3', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: '0' }} />
      <div className="CormorrantSC" style={{ ...styles.container, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: '1', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <div style={{ width: '5%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1250" data-aos-offset="0" style={{ height: '15%', borderLeft: '2px solid', borderBottom: '2px solid', borderRadius: 5 }} />
          <a data-aos="fade-right" data-aos-delay="1400" data-aos-offset="0" href="https://github.com/Aurelien-le-camus" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="icon" style={{ marginTop: '50%', marginBottom: '15%' }} />
          </a>
          <a data-aos="fade-right" data-aos-delay="1500" data-aos-offset="0" href="https://www.linkedin.com/in/aurelien-le-camus/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="icon" />
          </a>
        </div>
        <div style={{ width: '90%' }}>
          <div data-aos="fade-up" data-aos-delay="900" data-aos-offset="0" style={{ fontSize: '50px' }}>
            Hello
          </div>
          <div data-aos="fade-up" data-aos-delay="1050" data-aos-offset="0" style={{ width: '100%', fontSize: '100px', display: 'flex', justifyContent: 'center' }}>
            <div>
              I Am
            </div>
            <div style={{ marginLeft: '2%', fontWeight: '900', display: 'flex', flexDirection: 'row' }}>
              <div className="letter">
                D
              </div>
              <div className="letter">
                e
              </div>
              <div className="letter">
                v
              </div>
              <div className="letter">
                e
              </div>
              <div className="letter">
                l
              </div>
              <div className="letter">
                o
              </div>
              <div className="letter">
                p
              </div>
              <div className="letter">
                e
              </div>
              <div className="letter">
                r
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="1150" data-aos-offset="0" style={{ width: '100%', fontSize: '30px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '47.5%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <div style={{ width: '10%', marginRight: '3%', borderTop: '2px solid', borderBottom: '2px solid', borderRadius: 5 }} />
              Web developer
            </div>
            <div style={{ width: '5%' }}>
              |
            </div>
            <div style={{ width: '47.5%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              Mobile developer
              <div style={{ width: '10%', marginLeft: '3%', borderTop: '2px solid', borderBottom: '2px solid', borderRadius: 5 }} />
            </div>
          </div>
        </div>
        <div style={{ width: '5%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1250" data-aos-offset="0" style={{ height: '50%', borderLeft: '2px solid', borderBottom: '2px solid', borderRadius: 5 }} />
        </div>
      </div>
    </div>
  );
}

export default Home;