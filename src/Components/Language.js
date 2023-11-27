import React from 'react';

const Language = ({ logo, language, color }) => {

  const styles = {
    main: {
      flexDirection: "row",
      display: "flex",
      justifyContent: 'center',
      fontSize: "calc(10px + 1vmin)",
      padding: '2px',
      paddingLeft: '4px',
      paddingRight: '15px',
      color: color,
      fontWeight: 600,
      borderRadius: 3,
      backgroundColor: `rgba(${hexToRgb(color)}, 0.25)`,
    },
  };

  function hexToRgb(hex) {
    hex = hex.substring(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }

  return (
    <div style={styles.main}>
      <div style={{ height: '25px', marginRight: '3px' }}>
        <img src={logo} alt="Clogo" style={{ width: "25px", height: "25px" }} />
      </div>
      <div>
        {language}
      </div>
    </div>
  );
};

export default Language;
