import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../cssAnimations/formContact.css";
import contact from "../images/pc.png";

const styles = {
  main: {
    flexDirection: "column",
    display: "flex",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  container: {
    flexDirection: "row",
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    overflow: 'hidden',
    textAlign: 'center',
    marginTop: '100px',
    zIndex: 2,
  },
  halfPart: {
    width: "50%",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  halfContact: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '2%',
  }
};

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div style={{ width: '5%' }} />
        <div data-aos="fade-zoom-in" data-aos-ease="ease" style={{ width: '90%', backgroundColor: '#232C33', display: 'flex', flexDirection: 'column', padding: '1%', borderRadius: 5 }}>
          <div data-aos="fade-zoom-in" data-aos-ease="ease" data-aos-delay="150" style={{ fontSize: '40px', fontWeight: 500, display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <div>
              Développons
            </div>
            <div style={{ marginLeft: '10px', marginRight: '10px', fontWeight: 700 }}>
              ensemble
            </div>
            <div style={{ marginRight: '10px' }}>
              la solution qui répond à vos
            </div>
            <div style={{ fontWeight: 700 }}>
              besoins
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={styles.halfPart}>
              <img data-aos="fade-zoom-in" data-aos-ease="ease" data-aos-delay="300" src={contact} alt="contact" />
            </div>
            <div style={styles.halfPart}>
              <div data-aos="fade-zoom-in" data-aos-ease="ease" data-aos-delay="400" style={styles.halfContact}>
                <div style={{ fontWeight: 700, fontSize: '60px' }}>
                  AURELIEN LE CAMUS
                </div>
                <div style={{ fontWeight: 500, fontSize: '40px' }}>
                  WEBSITE | MOBILE APPLICATION
                </div>
                <div style={{ fontWeight: 200, fontSize: '25px', marginTop: '8%', fontStyle: 'italic' }}>
                  aurelien.le-camus@epitech.eu
                </div>
                <div style={{ fontWeight: 200, fontSize: '25px', marginTop: '2%', marginBottom: '2%', fontStyle: 'italic' }}>
                  aurelien.lecamus.walca@gmail.com
                </div>
                <div style={{ fontWeight: 200, fontSize: '25px', fontStyle: 'italic' }}>
                  06 51 88 54 85
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '5%' }} />
      </div>
    </div>
  );
};

export default Contact;
