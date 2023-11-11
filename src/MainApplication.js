import React, { useEffect, useState } from "react";
import "./font/font.css";
import './locomotive-scroll.css';
import createScroll from "./locomotive-scroll-config.js";
import { gsap } from "gsap";
import GlassOrb from "./Components/GlassOrb";
import "./particles.css";

const titles = ["Bienvenue", "Welcome", "Willkommen", "Benvenuto"];

const styles = {
  main: {
    flexDirection: "column",
    display: "flex",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    background: 'linear-gradient(0deg, rgba(50,63,63,1) 29%, rgba(36,36,36,1) 74%)'
  },
  welcome: {
    fontSize: 150,
    width: '100%',
    marginTop: '17%',
  },
  container: {
    flexDirection: "column",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    overflowX: 'hidden',
    textAlign: 'center',
    zIndex: 0,
  },
  glassSpace: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  glassText: {
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const MainApplication = () => {

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titles[currentTitleIndex]);

  const firstBuilding = "https://drive.google.com/uc?export=view&id=1U08IxfdScMzVIFZm9fas3EgBMZBzpI3P";
  const midBuilding = "https://drive.google.com/uc?export=view&id=1Wg0S0xn38oHLAPqoIpSQ4z2rZX29XIkQ";
  const fullFirstLayer = "https://drive.google.com/uc?export=view&id=1T6ed12oWFDeqQKUfjUZ7q_Xml0yRSzcP";
  const fullSecondLayer = "https://drive.google.com/uc?export=view&id=1ifs9C4vQMkFAYpjsefPELNSGZ1VmM06-"
  const Moon = "https://drive.google.com/uc?export=view&id=1CM084OqZAjcSmNVM2o20fFT7QYfbJ5KP";

  useEffect(() => {
    if (!fullFirstLayer || !fullSecondLayer || !firstBuilding || !midBuilding) {
      return;
    }

    const tl = new gsap.timeline();

    tl.from(".backgroundLayer", 1, {
      opacity: 0,
      ease: "Power3.out",
    }, 1);

    tl.fromTo(".fullfirstLayer", {
      opacity: 1,
    },
      {
        opacity: 0,
        y: "93.4%",
        ease: "Power2.out",
      }, 2);

    tl.fromTo(".fullmidLayer", 1, {
      opacity: 1
      },
      {
        opacity: 0,
        y: "200%",
        ease: "Power2.out",
      }, 2.3);

    //Animation for different levels of layer
    tl.fromTo(".firstLayer", {
      y: "-50%",
      opacity: 0,
    },
      {
        opacity: 1,
        y: "30%",
        ease: "Power2.out",
      }, 2);

    tl.fromTo(".midLayer", {
      y: "-50%",
    },
      {
        y: "30%",
        ease: "Power2.out",
      }, 2.3);

    tl.from(".moonLayer", 1, {
      opacity: 0,
      y: -300,
      ease: "Power3.out",
    }, 2.7);

    tl.from(".glassLeftFar", 1, {
      opacity: 0,
      x: '-100%',
      ease: "Power3.out",
    }, 3.2);

    tl.from(".glassLeftClose", 1, {
      opacity: 0,
      x: '-120%',
      ease: "Power3.out",
    }, 3.7);

    tl.from(".glassRightFar", 1, {
      opacity: 0,
      x: '100%',
      ease: "Power3.out",
    }, 3.2);

    tl.from(".glassRightClose", 1, {
      opacity: 0,
      x: '120%',
      ease: "Power3.out",
    }, 3.7);

    //Animation for title
    tl.from(".title", 1, {
      opacity: 0,
      ease: "Power3.out",
    }, 4);

    tl.from(".subTitle", 1, {
      opacity: 0,
      ease: "Power3.out",
    }, 4.5);
  
  }, [fullSecondLayer]);

  let scroll = null;

  useEffect(() => {
    scroll = createScroll();
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  // Animation for the text of welcoming
  useEffect(() => {
    const changeTitleWithFade = () => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length); // Mise à jour fonctionnelle de currentTitleIndex
      const nextTitleIndex = (currentTitleIndex + 1) % titles.length;
      const titleElement = document.querySelector(".title");

      gsap.to(titleElement, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setCurrentTitle(titles[nextTitleIndex]);
          gsap.fromTo(
            titleElement,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 1,
            }
          );
        },
      });
    };

    const titleChangeInterval = setInterval(changeTitleWithFade, 4000);

    return () => {
      clearInterval(titleChangeInterval);
    };
  }, [currentTitleIndex]);

  const circles = [];

  for (let i = 0; i < 30; i++) {
    circles.push(
      <div key={i} className="circle-container">
        <div className="circle"></div>
      </div>
    );
  }

  return (
    <div data-scroll-container style={styles.main}>
      <div className="backgroundLayer">
        {circles}
      </div>
      <div style={{ postion: 'relative' }}>
        <div className="firstLayer" style={{ backgroundImage: `url(${firstBuilding})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 3 }} />
        <div className="fullfirstLayer" style={{ backgroundImage: `url(${fullFirstLayer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 3 }} />
        <div className="midLayer" style={{ backgroundImage: `url(${midBuilding})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }} />
        <div className="fullmidLayer" style={{ backgroundImage: `url(${fullSecondLayer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }} />
        <div className="moonLayer" style={{ backgroundImage: `url(${Moon})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} />
        <div className="Rajdhani">
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', position: 'absolute', zIndex: 4 }}>
            <div className="glassLeftFar" style={styles.glassSpace}>
              <GlassOrb style={{ ...styles.glassText, marginBottom: '55%', marginLeft: '50%' }} basicText={"Cliquez ici"} newText={"Un passioné"} is2={false} />
            </div>
            <div className="glassLeftClose" style={styles.glassSpace}>
              <GlassOrb style={{ ...styles.glassText, marginLeft: '17%' }} basicText={"Cliquez ici"} newText={"Un déterminé"} is2={true} />
            </div>
            <div className="glassRightClose" style={styles.glassSpace}>
              <GlassOrb style={{ ...styles.glassText, marginRight: '17%' }} basicText={"Cliquez ici"} newText={"Un acharné"} is2={true} />
            </div>
            <div className="glassRightFar" style={styles.glassSpace}>
              <GlassOrb style={{ ...styles.glassText, marginBottom: '55%', marginRight: '50%' }} basicText={"Cliquez ici"} newText={"Un perfectionniste"} is2={false} />
            </div>
          </div>
        </div>
        <div className="CormorantSC">
          <div style={styles.container}>
            <div className="title" style={styles.welcome}>
              {currentTitle}
            </div>
            <div className="subTitle" style={{ fontSize: 45, opacity: 0.8 }}>
              Je suis...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainApplication;