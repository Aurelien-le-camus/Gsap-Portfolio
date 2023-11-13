import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import "../font/font.css"

const styles = {
  topMenu: {
    position: "fixed",
    top: 0,
    height: "75px",
    width: "100%",
    background: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    color: 'white',
    fontSize: "18px",
    padding: "10px",
    margin: "0 30px",
    cursor: "pointer",
  },
};

const TopMenu = () => {

  const [underlineHome, setUndelineHome] = useState(false);
  const [underlineFormation, setUndelineFormation] = useState(false);
  const [underlineProject, setUndelineProject] = useState(false);
  const [underlineContact, setUndelineContact] = useState(false);
  
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home") {
      setUndelineHome(true);
      setUndelineFormation(false);
      setUndelineProject(false);
      setUndelineContact(false);
    }
    if (location.pathname === "/formation") {
      setUndelineHome(false);
      setUndelineFormation(true);
      setUndelineProject(false);
      setUndelineContact(false);
    }
    if (location.pathname === "/projects") {
      setUndelineHome(false);
      setUndelineFormation(false);
      setUndelineProject(true);
      setUndelineContact(false);
    }
    if (location.pathname === "/contact") {
      setUndelineHome(false);
      setUndelineFormation(false);
      setUndelineProject(false);
      setUndelineContact(true);
    }
  }, [location]);

  const navigateTo = (path) => {
    navigate(path);
  }

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
          <div style={{ width: '25%', display: 'flex', justifyContent: 'center', fontSize: '30px', fontWeight: '800', color: 'white', cursor: 'default' }}>
            Walca
          </div>
          <div style={{ width: '25%' }} />
          <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
          <button
            className="Rajdhani"
            onClick={() => navigateTo("/home")}
            style={styles.button}
          >
            Accueil
            {underlineHome && <div style={{ width: '100%', borderTop: '1px solid', borderBottom: '1px solid', borderRadius: 5 }} />}
          </button>
          <button
            className="Rajdhani"
            onClick={() => navigateTo("/formation")}
            style={styles.button}
          >
            Mes expériences
            {underlineFormation && <div style={{ width: '100%', borderTop: '1px solid', borderBottom: '1px solid', borderRadius: 5 }} />}
          </button>
          <button
            className="Rajdhani"
            onClick={() => navigateTo("/projects")}
            style={styles.button}
          >
            Mes projets
            {underlineProject && <div style={{ width: '100%', borderTop: '1px solid', borderBottom: '1px solid', borderRadius: 5 }} />}
          </button>
          <button
            className="Rajdhani"
            onClick={() => navigateTo("/")}
            style={styles.button}
          >
            Me contacter
            {underlineContact && <div style={{ width: '100%', borderTop: '1px solid', borderBottom: '1px solid', borderRadius: 5 }} />}
          </button>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TopMenu;
