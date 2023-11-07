import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { gsap } from 'gsap';
import "../font/font.css"

const styles = {
  topMenu: {
    position: "fixed",
    top: 0,
    height: "75px",
    width: "100%",
    backgroundColor: "#333333",
    background: 'linear-gradient(to bottom, #333333, #242424), linear-gradient(to left, #333333, #242424), linear-gradient(to right, #333333, #242424)',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
    opacity: 0.7,
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    color: "#777777",
    fontSize: "18px",
    padding: "10px",
    margin: "0 30px",
    cursor: "pointer",
  },
};

const TopMenu = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const tl = new gsap.timeline();

    //Animation for leftSide menu
    tl.from(".top-menu", 1, {
      y: '-100%',
      ease: "Power3.out",
    });
  }, []);

  return (
    <div>
      <div className="top-menu" style={styles.topMenu}>
        <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
          <button
            className="Rajdhani"
            onClick={() => navigate("/")}
            style={styles.button}
          >
            Accueil
          </button>
          <button
            className="Rajdhani"
            onClick={() => navigate("/formation")}
            style={styles.button}
          >
            Mes expériences
          </button>
          <button
            className="Rajdhani"
            onClick={() => navigate("/projects")}
            style={styles.button}
          >
            Mes projets
          </button>
          <button
            className="Rajdhani"
            onClick={() => navigate("/")}
            style={styles.button}
          >
            Me contacter
          </button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TopMenu;
