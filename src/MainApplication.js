import React, { useEffect } from "react";
import "./font/font.css";
import SideMenu from "./Components/SideMenu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MainApplication = ({ timeline }) => {

  gsap.registerPlugin(ScrollTrigger);

  const colors = ["#777777", "#555555", "#777777", "#555555", "#777777"];

  const arrangeColors = (array) => {
    const orderedColors = [];
    const color1 = "#555555";
    const color2 = "#777777";
    const decider = Math.floor(Math.random() * 2) + 1;

    if (decider % 2 === 0) {
      for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
          orderedColors.push(color1);
        } else {
          orderedColors.push(color2);
        }
      }
    }
    else {
      for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
          orderedColors.push(color2);
        } else {
          orderedColors.push(color1);
        }
      }
    }

    return orderedColors;
  };

  const orderedColors = arrangeColors(colors);

  const EpitechImage = "https://cibul.s3.amazonaws.com/event_journee-portes-ouvertes-epitech-nancy_448_118323.jpg";
  const WorkingImage = "https://amio-millau.fr/assets/images/formations/FormationCAISI.webp";

  const styles = {
    main: {
      textAlign: "center",
    },
    welcome: {
      color: "#999999",
      fontSize: 40,
      width: '100%',
      marginTop: '3%',
      marginBottom: '10%',
    },
    container: {
      flexDirection: "column",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white",
      zIndex: 0,
    },
    line: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "50vh",
    },
    square1: {
      display: "flex",
      width: "200px",
      height: "200px",
      background: `linear-gradient(to left, ${orderedColors[0]}, #242424)`,
      textAlign: 'center',
      fontSize: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    square2: {
      display: "flex",
      width: "200px",
      height: "200px",
      backgroundColor: orderedColors[1],
      textAlign: 'center',
      fontSize: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    square3: {
      display: "flex",
      width: "200px",
      height: "200px",
      backgroundColor: orderedColors[2],
      textAlign: 'center',
      fontSize: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    square4: {
      display: "flex",
      width: "200px",
      height: "200px",
      backgroundColor: orderedColors[3],
      textAlign: 'center',
      fontSize: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    square5: {
      display: "flex",
      width: "200px",
      height: "200px",
      background: `linear-gradient(to left, #242424, ${orderedColors[4]})`,
      marginRight: '3%',
      textAlign: 'center',
      fontSize: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftDiv: {
      backgroundColor: '#272829',
      width: '55%',
      height: '100%',
      position: 'absolute',
      zIndex: 1,
      left: 0,
      clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)',
    },
    rightDiv: {
      backgroundColor: '#61677A',
      width: '55%',
      height: '100%',
      position: 'absolute',
      zIndex: 1,
      right: 0,
      clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)',
    },
    leftImageDiv: {
      backgroundColor: 'transparent',
      width: '50%',
      height: '50vh',
      display: 'flex',
      justifyContent: 'flex-start',
      position: 'absolute',
      backgroundImage: `url(${EpitechImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      left: 0,
      clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)',
    },
    rightImageDiv: {
      backgroundColor: 'transparent',
      border: '4px double white',
      borderLeft: 0,
      width: '58%',
      height: '50vh',
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      backgroundPosition: 'center',
      right: 0,
      clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)',
    },
    leftImageDiv2: {
      border: '4px double white',
      borderRight: 0,
      backgroundColor: 'transparent',
      width: '50%',
      height: '50vh',
      display: 'flex',
      justifyContent: 'flex-start',
      position: 'absolute',
      flexDirection: 'column',
      left: 0,
      clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)',
    },
    rightImageDiv2: {
      backgroundColor: 'transparent',
      width: '58%',
      height: '50vh',
      display: 'flex',
      backgroundImage: `url(${WorkingImage})`,
      position: 'absolute',
      backgroundPosition: 'center',
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
  };

  const getRandomPosition = () => {
    const y = (Math.random() * 400) - 200;
    return y;
  };

  useEffect(() => {
    timeline.to(".leftDoor", 2, {
      x: '-100%',
      ease: "Power1.out",
    });

    timeline.to(".rightDoor", 2, {
      x: '100%',
      ease: "Power1.out",
    }, 0);

    timeline.from(".title", 1, {
      opacity: 0,
      y: 80,
      ease: "Power3.out",
    }, 1);

    for (let i = 1; i <= 5; i++) {
      const y = getRandomPosition();
      timeline.from(`.square${i}`, {
        opacity: 0,
        y,
        ease: "Power3.out",
      }, 2);
    }

    timeline.from(".menu", {
      x: '-100%',
      ease: "Power1.out",
    });

    gsap.from(".leftImageSlide", 2, {
      opacity: 0,
      x: '-100%',
      scrollTrigger: {
        end: '50%',
        trigger: "#leftImageSlide",
        scrub: true,
      },
      ease: "Power3.out",
    }, 3);

    gsap.from(".rightImageSlide", 2, {
      opacity: 0,
      x: '100%',
      scrollTrigger: {
        end: '50%',
        trigger: "#rightImageSlide",
        scrub: true,
      },
      ease: "Power3.out",
    }, 3);

    gsap.from(".leftImageSlide2", 2, {
      opacity: 0,
      x: '-100%',
      scrollTrigger: {
        trigger: "#leftImageSlide2",
        scrub: true,
      },
      ease: "Power3.out",
    }, 3);

    gsap.from(".rightImageSlide2", 2, {
      opacity: 0,
      x: '100%',
      scrollTrigger: {
        trigger: "#rightImageSlide2",
        scrub: true,
      },
      ease: "Power3.out",
    }, 3);
  });

  function navigateFormation() {
    const leftImageSlide = document.getElementById("leftImageSlide");
    if (leftImageSlide) {
      window.scrollTo({ top: leftImageSlide.offsetTop, behavior: 'smooth' });
    }
  }  

  return (
    <div className="Rajdhani" style={styles.main}>
      <div className="leftDoor" style={styles.leftDiv} />
      <div className="rightDoor" style={styles.rightDiv} />
      <SideMenu navigateFormation={navigateFormation}/>
      <div style={styles.container}>
        <div className="title" style={styles.welcome}>
          Bienvenue sur mon site
        </div>
        <div style={styles.line}>
          <div className="square1" style={styles.square1}>
            Salut
          </div>
          <div className="square2" style={styles.square2}>
            je
          </div>
          <div className="square3" style={styles.square3}>
            suis
          </div>
          <div className="square4" style={styles.square4}>
            Aurélien
          </div>
          <div className="square5" style={styles.square5}>
            Le Camus
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <div id="leftImageSlide" className="leftImageSlide" style={styles.leftImageDiv} />
          <div className="rightImageSlide" style={styles.rightImageDiv}>
            <div className="Merriweather" style={styles.textFormationRight}>
              Mes formations
            </div>
            <div className="Rajdhani" style={styles.textFormationRightDetails}>
              <div style={{ marginTop: '22vh' }}>
                Double certification Technological University of Dublin
              </div>
            </div>
            <div className="Rajdhani" style={styles.textFormationRightDetails}>
              Epitech Nancy - Expert en technologies de l'information et de la communication
            </div>
          </div>
        </div>
        <div style={{ width: '100%', marginTop: '55vh' }}>
          <div className="leftImageSlide2" style={styles.leftImageDiv2}>
            <div className="Merriweather" style={styles.textExperienceLeft}>
              Mes expériences pro
            </div>
            <div className="Rajdhani" style={styles.textExperienceLeftDetails}>
              <div style={{ marginTop: '22vh' }}>
                Assistant Pédagogique Epitech {`(3ème et 5ème année)`}
              </div>
            </div>
            <div className="Rajdhani" style={styles.textExperienceLeftDetails}>
              Développeur WEB - English World Nancy
            </div>
          </div>
          <div className="rightImageSlide2" style={styles.rightImageDiv2} />
        </div>
      </div>
    </div>
  );
};

export default MainApplication;
