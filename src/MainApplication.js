import React, { useEffect, useState } from "react";
import "./font/font.css";
import './locomotive-scroll.css';
import createScroll from "./locomotive-scroll-config.js";
import { gsap } from "gsap";

const titles = ["Bienvenue", "Welcome", "Willkommen", "Bienvenuto"];

const styles = {
  main: {
    flexDirection: "column",
    display: "flex",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  welcome: {
    fontSize: 150,
    width: '100%',
    marginBottom: '10%',
    marginTop: '10%',
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
};

const MainApplication = () => {

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titles[currentTitleIndex]);

  const green = "https://drive.google.com/uc?export=view&id=1kWjJEd_Er87CwnnCHHYikIfRMsgnnxEn";
  const firstLayer = "https://drive.google.com/uc?export=view&id=1McVINKlepyjtPjHizWVFkwkX6JWaU9js";
  const midLayer = "https://drive.google.com/uc?export=view&id=1eWCHMXFHfDlgafwAZk6TGRDVO-ot6DDq";
  const moonLayer = "https://drive.google.com/uc?export=view&id=1OQ9ROPiPr1TrgbLOGQb0dDlG8lW4Efre";

  useEffect(() => {
    if (!green) {
      return;
    }

    const tl = new gsap.timeline();

    tl.from(".backgroundLayer", 1, {
      opacity: 0,
      ease: "Power3.out",
    }, 2);

    //Animation for different levels of layer
    tl.from(".firstLayer", 1, {
      opacity: 0,
      y: 100,
      ease: "Power3.out",
    }, 1);

    tl.from(".midLayer", 1, {
      opacity: 0,
      y: 100,
      ease: "Power3.out",
    }, 1.4);

    tl.from(".moonLayer", 1, {
      opacity: 0,
      y: -100,
      ease: "Power3.out",
    }, 1.8);

    //Animation for title
    tl.from(".title", 1, {
      opacity: 0,
      y: 100,
      ease: "Power3.out",
    }, 3);
  }, [green]);

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
        x: "-15%",
        duration: 1,
        onComplete: () => {
          setCurrentTitle(titles[nextTitleIndex]);
          gsap.set(titleElement, { x: "15%" });
          setTimeout(() => {
            gsap.fromTo(
              titleElement,
              {
                opacity: 0,
                x: "15%",
              },
              {
                opacity: 1,
                duration: 1,
                x: 0,
              }
            );
          }, 1000); // Pause de 1 seconde
        },
      });
    };

    const titleChangeInterval = setInterval(changeTitleWithFade, 4000);

    return () => {
      clearInterval(titleChangeInterval);
    };
  }, [currentTitleIndex]);

  return (
    <div data-scroll-container style={styles.main}>
      <div style={{ postion: 'relative' }}>
        <div className="backgroundLayer" style={{ backgroundImage: `url(${green})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', }} />
        <div className="firstLayer" style={{ backgroundImage: `url(${firstLayer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 3 }}>
          <div className="CormorantSC">
            <div style={styles.container}>
              <div className="title" style={styles.welcome}>
                {currentTitle}
              </div>
            </div>
          </div>
        </div>
        <div className="midLayer" style={{ backgroundImage: `url(${midLayer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }} />
        <div className="moonLayer" style={{ backgroundImage: `url(${moonLayer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} />
      </div>
    </div>
  );
};

export default MainApplication;