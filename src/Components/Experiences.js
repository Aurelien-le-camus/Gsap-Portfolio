import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../cssAnimations/rectangleHover.css";
import dublinImage from "../images/dublin.jpg";
import travel from "../images/traveling.png";
import study from "../images/innovation.png";
import bartender from "../images/bartender.png";

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
  smallCard: {
    width: '25%',
    height: '30vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1%',
  },
  contentSmallCard: {
    fontSize: '20px',
    color: 'black',
    fontWeight: 600,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
  },
  picture: {
    width: '200px',
  }
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
        <div data-aos="fade-up" style={{ width: '80%', height: '100vh', backgroundColor: 'white', marginTop: '10%', marginBottom: '3%', display: 'flex', flexDirection: 'column', padding: '2%' }}>
          <div data-aos="fade-up" style={{ fontSize: '130px', color: 'black', fontWeight: 700, width: '100%' }}>
            DUBLIN TRIP
          </div>
          <div data-aos="fade-up" style={{ fontSize: '30px', color: 'black', fontWeight: 700, width: '100%' }}>
            Unforgettable year
          </div>
          <div data-aos="fade-up" style={{ height: '80%', marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', background: `url(${dublinImage})`, backgroundSize: 'cover', borderRadius: 7 }} />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginBottom: '3%' }}>
          <div data-aos="fade-up" data-aos-delay="100" style={styles.smallCard}>
            <img src={travel} alt="travel" style={styles.picture} />
            <div style={styles.contentSmallCard}>
              {`4th year of Epitech in another country than France (incredible chance)`}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" style={styles.smallCard}>
            <img src={study} alt="study" style={styles.picture} />
            <div style={styles.contentSmallCard}>
              {`A successfull year at Technological University of Dublin (double certification)`}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" style={styles.smallCard}>
            <img src={bartender} alt="bartender" style={styles.picture} />
            <div style={styles.contentSmallCard}>
              A crazy new experience with his package of surprise and new encounters
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
