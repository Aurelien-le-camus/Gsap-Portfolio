import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../cssAnimations/rectangleHover.css";

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
    zIndex: 1,
  },
};

const Experiences = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div style={{ width: '120%', display: 'flex', overflow: 'hidden' }}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ background: '#4A5759' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1100" style={{ width: '25%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 800 }}>
              DESIGN
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="550" style={{ width: '5%' }}>
            <div className="rectangleContainer" style={{ background: '#DEDBD2' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1150" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 500 }}>
              CSS
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="350" style={{ width: '20%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="950" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', color: '#4A5759', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 700 }}>
              HTML
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="750" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ background: '#EDAFB8' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" style={{ width: '5%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="600" style={{ width: '15%' }}>
            <div className="rectangleContainer" />
          </div>
        </div>
        <div style={{ width: '120%', display: 'flex', overflow: 'hidden' }}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1200" style={{ width: '10%' }}>
            <div className="rectangleContainer" style={{ background: 'white' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="400" style={{ width: '15%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="650" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', color: '#EDAFB8', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 500 }}>
              REACT
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1250" style={{ width: '5%' }}>
            <div className="rectangleContainer" style={{ background: '#EDAFB8' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', color: '#DEDBD2', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 800 }}>
              WEB
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="850" style={{ width: '10%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="450" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ background: '#DEDBD2' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1350" style={{ width: '10%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 400 }}>
              JS
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="800" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ background: '#4A5759' }} />
          </div>
        </div>
        <div style={{ width: '120%', display: 'flex', overflow: 'hidden' }}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" style={{ width: '20%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" style={{ width: '10%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 800 }}>
              C
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="700" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ background: '#DEDBD2' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="250" style={{ width: '25%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', color: '#4A5759', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 700 }}>
              MOBILE
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="150" style={{ width: '10%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1150" style={{ width: '5%' }}>
            <div className="rectangleContainer" style={{ background: '#4A5759' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="900" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', color: '#DEDBD2', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 400 }}>
              PYTHON
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="350" style={{ width: '10%' }}>
            <div className="rectangleContainer" style={{ display: 'flex' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="600" style={{ width: '20%' }}>
            <div className="rectangleContainer" style={{ background: '#EDAFB8' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
