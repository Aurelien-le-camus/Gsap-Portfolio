import React, { useEffect } from "react";
import "../font/font.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";
import "../glass.css";

const EpitechImage = "https://cibul.s3.amazonaws.com/event_journee-portes-ouvertes-epitech-nancy_448_118323.jpg";
const WorkingImage = "https://amio-millau.fr/assets/images/formations/FormationCAISI.webp";
const DublinImage = "https://guide-goyav.com/wp-content/uploads/2021/01/DUBLIN18-1.jpg";
const WorkImage = "https://fiverr-res.cloudinary.com/image/upload/w_880/f_auto,q_auto/v1/attachments/generic_asset/asset/767bc10a0c44b0a67be1a94aea270205-1609336032121/website%20development-min.jpg";
const GymImage = "https://i.pinimg.com/originals/ed/18/1e/ed181eb2e1d73fd70b1094908c65b891.jpg";

const styles = {
  main: {
    flexDirection: "column",
    minHeight: "100vh",
    display: "flex",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  leftImageDiv: {
    backgroundColor: 'transparent',
    width: '50%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundImage: `url(${EpitechImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    left: 0,
    clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)',
  },
  rightImageDiv: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    borderLeft: 0,
    width: '58%',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundPosition: 'center',
    position: 'absolute',
    right: 0,
    clipPath: 'polygon(20% 0.65%, 100% 0%, 100% 100%, 1% 99.4%)',
  },
  leftImageDiv2: {
    border: '2px solid white',
    borderRight: 0,
    backgroundColor: '#242424',
    width: '50%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    clipPath: 'polygon(0% 0%, 99% 0.6%, 79% 99.3%, 0% 100%)',
  },
  rightImageDiv2: {
    backgroundColor: 'transparent',
    width: '58%',
    height: '50vh',
    display: 'flex',
    backgroundImage: `url(${WorkingImage})`,
    backgroundPosition: 'center',
    position: 'absolute',
    right: 0,
    clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)',
  },
  textExperienceLeft: {
    width: '100%',
    fontSize: 45,
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '3vh',
    marginLeft: '-38vh',
  },
  textFormationRight: {
    fontSize: 45,
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '3vh',
    marginRight: '3vh',
  },
  textFormationRightDetails: {
    fontSize: 25,
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '3vh',
    marginRight: '3vh',
  },
  textExperienceLeftDetails: {
    fontSize: 25,
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '3vh',
    marginLeft: '3vh',
  },
  firstCard: {
    width: '200px',
    height: '250px',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondCard: {
    width: '200px',
    height: '250px',
    marginTop: '20vh',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdCard: {
    marginTop: '10vh',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstImage: {
    width: '90%',
    height: '90%',
    display: 'flex',
    backgroundImage: `url(${DublinImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: 5,
  },
  secondImage: {
    width: '90%',
    height: '90%',
    display: 'flex',
    backgroundImage: `url(${GymImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: 5,
  },
  thirdImage: {
    width: '90%',
    height: '90%',
    display: 'flex',
    backgroundImage: `url(${WorkImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: 5,
  },
  imagesBackground: {
    marginTop: '10vh',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  basicBackground: {
    width: '100%',
    display: 'flex',
  }
};

const Formation = () => {

  useEffect(() => {
    const tl = new gsap.timeline();
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const glass = document.querySelector('.glass');
    glass.classList.add('disabled-hover');
    setTimeout(() => {
      glass.classList.remove('disabled-hover');
    }, 1100);
  }, []) 

  return (
    <div className="Rajdhani" style={styles.main}>
      <div style={{ height: '100vh', marginBottom: '10vh' }}>
        <div style={styles.basicBackground}>
          <div data-aos="fade-up" style={{ marginTop: '30vh', height: '20vh', width: '50%', display: 'flex', justifyContent: 'center', fontSize: 60 }}>
            Découvrez mon parcours
          </div>
          <div style={styles.imagesBackground}>
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" className="glass" style={styles.firstCard}>
              <div style={styles.firstImage} />
            </div>
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="50" data-aos-offset="0" className="glass" style={styles.secondCard}>
              <div style={styles.secondImage} />
            </div>
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="150" data-aos-offset="0" className="glass" style={styles.thirdCard}>
              <div style={styles.thirdImage} />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '25vh' }}>
          <div style={{ width: '50%' }} />
          <div data-aos="fade-left" style={{ height: '20vh', width: '50%', display: 'flex', justifyContent: 'center', fontSize: 60 }}>
            Ma formation
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div data-aos="fade-right" style={{ height: '20vh', width: '50%', display: 'flex', justifyContent: 'center', fontSize: 60 }}>
            Mes expériences
          </div>
          <div style={{ width: '50%' }} />
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }} />
          <div data-aos="fade-up" style={{ height: '20vh', width: '50%', fontSize: 60 }}>
            Mes voyages
          </div>
        </div>
      </div>
      <div style={{ marginTop: '30vh', height: '100vh' }}>
        <div style={{ width: '100%', height: '42.5vh', marginTop: '10vh' }}>
          <div id="leftImageSlide" data-aos="fade-right" className="leftImageSlide" style={styles.leftImageDiv} />
          <div data-aos="fade-left" className="rightImageSlide" style={styles.rightImageDiv}>
            <div data-aos="fade-left" className="Merriweather" style={styles.textFormationRight}>
              Mes formations
            </div>
            <div data-aos="fade-left" className="Rajdhani" style={styles.textFormationRightDetails}>
              <div style={{ marginTop: '22vh' }}>
                Double certification Technological University of Dublin
              </div>
            </div>
            <div data-aos="fade-left" className="Rajdhani" style={styles.textFormationRightDetails}>
              Epitech Nancy - Expert en technologies de l'information et de la communication
            </div>
          </div>
        </div>
        <div style={{ marginTop: '15vh' }} />
        <div style={{ width: '100%', height: '42.5vh', flexWrap: 'nowrap', marginTop: '10vh' }}>
          <div data-aos="fade-right" className="leftImageSlide2" style={styles.leftImageDiv2}>
            <div data-aos="fade-right" className="Merriweather" style={styles.textExperienceLeft}>
              Mes expériences pro
            </div>
            <div data-aos="fade-right" className="Rajdhani" style={styles.textExperienceLeftDetails}>
              <div style={{ marginTop: '14vh' }}>
                Assistant Pédagogique Epitech {`(3ème et 5ème année)`}
              </div>
            </div>
            <div data-aos="fade-right" className="Rajdhani" style={styles.textExperienceLeftDetails}>
              Développeur WEB - English World Nancy
            </div>
            <div data-aos="fade-right" className="Rajdhani" style={styles.textExperienceLeftDetails}>
              Auto entrepreneur {`(entreprise WALCA)`}
            </div>
          </div>
          <div data-aos="fade-left" className="rightImageSlide2" style={styles.rightImageDiv2} />
        </div>
      </div>
      <div style={{ marginTop: '25vh', height: '100vh' }}>
        Div 100vh
      </div>
    </div>
  );
};

export default Formation;
