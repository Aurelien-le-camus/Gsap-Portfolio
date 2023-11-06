import React, { useEffect, useState } from "react";
import "./font/font.css";
import './locomotive-scroll.css';
import createScroll from "./locomotive-scroll-config.js";
import { gsap } from "gsap";
import Background from "./images/Background.png";
import FrontLayer from "./images/FrontLayer.png";
import MidLayer from "./images/MidLayer.png";
import MoonLayer from "./images/FinalMoon.png";

const colors = ["#777777", "#555555", "#777777", "#555555", "#777777"];
const titles = ["Bienvenue", "Welcome", "Willkommen", "Bienvenuto"];

//Function to manipulate order of colors to get 1 2 1 2 1 or 2 1 2 1 2
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

const styles = {
  main: {
    textAlign: "center",
  },
  welcome: {
    fontSize: 150,
    width: '100%',
    marginBottom: '10%',
    marginTop: '20%',
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
    marginBottom: "40vh",
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
};

const MainApplication = () => {

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titles[currentTitleIndex]);

  //Function to get random positions for every square animation
  const getRandomPosition = () => {
    const y = (Math.random() * 400) - 200;
    return y;
  };

  useEffect(() => {
    const tl = new gsap.timeline();

    //Animation for different levels of layer
    tl.from(".frontLayer", 1, {
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

    //Animation for squares with text
    for (let i = 1; i <= 5; i++) {
      const y = getRandomPosition();
      tl.from(`.square${i}`, {
        opacity: 0,
        y,
        ease: "Power3.out",
      }, 2);
    }
  }, []);

  //let scroll = null;

  //SCROLL CREATION
  /*useEffect(() => {
    scroll = createScroll();
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);*/

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
    <div style={styles.main}>
      <div className="backgroundLayer" style={{ backgroundImage: `url(${Background})`, zIndex: '-1' }}>
        <div className="frontLayer" style={{ backgroundImage: `url(${FrontLayer})`, zIndex: '1' }}>
          <div className="midLayer" style={{ backgroundImage: `url(${MidLayer})`, zIndex: '0' }}>
            <div className="moonLayer" style={{ backgroundImage: `url(${MoonLayer})` }}>
              <div className="CormorantSC">
                <div style={styles.container}>
                  <div className="title" style={styles.welcome}>
                    {currentTitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainApplication;
