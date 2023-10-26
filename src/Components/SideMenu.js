import React from "react";
import "../font/font.css"

const SideMenu = ({ navigateFormation }) => {

  const styles = {
    sideMenu: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "200%",
      width: "150px",
      backgroundColor: "#333333",
      background: "linear-gradient(to right, #333333, #242424)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    button: {
      backgroundColor: "transparent",
      border: "none",
      color: "#777777",
      fontSize: "18px",
      padding: "10px",
      margin: "10px 0",
      cursor: "pointer",
    },
  };

  const handleHomeClick = () => {
  };

  const handleExperiencesClick = () => {
    navigateFormation();
  };

  const handleProjectsClick = () => {
  };

  const handleContactClick = () => {
  };

  return (
    <div className="menu" style={styles.sideMenu}>
      <div style={{ position: 'fixed', top: 0 }}>
        <div style={{ width: '100%' }}>
          <button className="Rajdhani" onClick={handleHomeClick} style={styles.button}>
            Accueil
          </button>
        </div>
        <div style={{ width: '100%' }}>
          <button className="Rajdhani" onClick={handleExperiencesClick} style={styles.button}>
            Mes expériences
          </button>
        </div>
        <div style={{ width: '100%' }}>
          <button className="Rajdhani" onClick={handleProjectsClick} style={styles.button}>
            Mes projets
          </button>
        </div>
        <div style={{ width: '100%' }}>
          <button className="Rajdhani" onClick={handleContactClick} style={styles.button}>
            Me contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
