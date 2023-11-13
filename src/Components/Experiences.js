import React from 'react';

const styles = {
  main: {
    flexDirection: "column",
    display: "flex",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  container: {
    flexDirection: "column",
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    overflow: 'hidden',
    textAlign: 'center',
    marginTop: '100px',
    zIndex: 1,
  },
  rectangle: {
    height: '200px',
    border: "3px solid white",
    background: 'transparent',
  }
};

const Experiences = () => {
  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div style={{ width: '120%', display: 'flex', overflow: 'hidden' }}>
          <div style={{ ...styles.rectangle, width: '15%', background: 'white' }} />
          <div style={{ ...styles.rectangle, width: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 800 }}>
            DESIGN
          </div>
          <div style={{ ...styles.rectangle, width: '5%', background: 'white' }} />
          <div style={{ ...styles.rectangle, width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 500 }}>
            CSS
          </div>
          <div style={{ ...styles.rectangle, width: '20%' }} />
          <div style={{ ...styles.rectangle, width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 700 }}>
            HTML
          </div>
          <div style={{ ...styles.rectangle, width: '15%', background: 'white' }} />
          <div style={{ ...styles.rectangle, width: '5%' }} />
          <div style={{ ...styles.rectangle, width: '15%' }} />
        </div>
        <div style={{ width: '120%', display: 'flex', overflow: 'hidden' }}>
          <div style={{ ...styles.rectangle, width: '10%', background: 'white' }} />
          <div style={{ ...styles.rectangle, width: '15%' }} />
          <div style={{ ...styles.rectangle, width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 500 }}>
            REACT
          </div>
          <div style={{ ...styles.rectangle, width: '5%', background: 'white' }} />
          <div style={{ ...styles.rectangle, width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 800 }}>
            WEB
          </div>
          <div style={{ ...styles.rectangle, width: '10%' }} />
          <div style={{ ...styles.rectangle, width: '15%', background: 'white' }} />
          <div style={{ ...styles.rectangle, width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 400 }}>
            JS
          </div>
          <div style={{ ...styles.rectangle, width: '15%', background: 'white' }} />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
