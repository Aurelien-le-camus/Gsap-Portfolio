import React, { useEffect, useState } from "react";
import "./font/font.css";
import './locomotive-scroll.css';
import createScroll from "./locomotive-scroll-config.js";
import { gsap } from "gsap";
import GlassOrb from "./Components/GlassOrb";
import "./particles.css";
import entireFirstLayer from "./images/EntireFirstBuilding.png";
import entireMidLayer from "./images/EntireMidBuilding.png";
import moonLayer from "./images/Moon.png";

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

  useEffect(() => {
    const tl = new gsap.timeline();

    tl.from(".backgroundLayer", 1, {
      opacity: 0,
      ease: "Power3.out",
    }, 1);

    //Animation for different levels of layer
    tl.fromTo(".firstLayer", {
      y: "-50%",
    },
      {
        y: "20%",
        ease: "Power1.out",
        duration: 1.8,
      }, 1);

    tl.fromTo(".midLayer", {
      y: "-50%",
    },
      {
        y: "20%",
        ease: "Power2.out",
        duration: 2,
      }, 1);

    tl.from(".moonLayer", 1, {
      y: -600,
      ease: "Power3.out",
      duration: 1,
    }, 1.7);

    tl.from(".glassLeftFar", 1, {
      opacity: 0,
      x: '-100%',
      ease: "Power3.out",
    }, 3);

    tl.from(".glassLeftClose", 1, {
      opacity: 0,
      x: '-120%',
      ease: "Power3.out",
    }, 3.3);

    tl.from(".glassRightFar", 1, {
      opacity: 0,
      x: '100%',
      ease: "Power3.out",
    }, 3);

    tl.from(".glassRightClose", {
      duration: 1,
      opacity: 0,
      x: '120%',
      ease: "Power3.out",
    }, 3.3);

    //Animation for title
    tl.from(".title", 1, {
      opacity: 0,
      ease: "Power3.out",
    }, 4);

    tl.from(".subTitle", 1, {
      opacity: 0,
      ease: "Power3.out",
    }, 4.5);

  }, []);

  useEffect(() => {
    let scroll = null;

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
        <div className="firstLayer" style={{ backgroundImage: `url(${entireFirstLayer})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% auto', backgroundPosition: 'bottom', height: '200vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 3 }} />
        <div className="midLayer" style={{ backgroundImage: `url(${entireMidLayer})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% auto', backgroundPosition: 'bottom', height: '200vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }} />
        <div className="moonLayer" style={{ backgroundImage: `url(${moonLayer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} />
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