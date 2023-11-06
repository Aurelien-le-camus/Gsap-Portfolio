import React, { useEffect, useState } from "react";
import "./font/font.css";
import './locomotive-scroll.css';
import createScroll from "./locomotive-scroll-config.js";
import { gsap } from "gsap";

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
    color: "#999999",
    fontSize: 50,
    width: '100%',
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

    //Animation for title
    tl.from(".title", 1, {
      opacity: 0,
      y: 80,
      ease: "Power3.out",
    }, 1);

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

  let scroll = null;

  useEffect(() => {
    scroll = createScroll();
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

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
  }, [currentTitleIndex]); // Ajoutez currentTitleIndex comme dépendance  
  
  return (
    <div data-scroll-container className="Rajdhani" style={styles.main}>
      <div data-scroll-section style={styles.container}>
        <div className="title" style={styles.welcome}>
          {currentTitle}
        </div>
        <div style={styles.line}>
          <div data-scroll data-scroll-speed="2" data-scroll-position="top" className="square1" style={styles.square1} />
          <div data-scroll data-scroll-speed="2.5" data-scroll-position="top" className="square2" style={styles.square2} />
          <div data-scroll data-scroll-speed="3" data-scroll-position="top" className="square3" style={styles.square3} />
          <div data-scroll data-scroll-speed="2.5" data-scroll-position="top" className="square4" style={styles.square4} />
          <div data-scroll data-scroll-speed="2" data-scroll-position="top" className="square5" style={styles.square5} />
        </div>
        <div className="Projects" style={{ height: '100vh' }}>
          DIV DE 100H
        </div>
      </div>
    </div>
  );
};

export default MainApplication;
