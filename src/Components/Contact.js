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
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
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
          <div data-aos="fade-up" data-aos-delay="150" style={{ fontSize: '40px', fontWeight: 500, display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <div>
              Développons
            </div>
            <div style={{ marginLeft: '10px', marginRight: '10px', fontWeight: 700 }}>
              ensemble
            </div>
            <div style={{ marginRight: '10px' }}>
              la solution de
            </div>
            <div style={{ marginRight: '10px' }}>
              vos
            </div>
            <div style={{ fontWeight: 700 }}>
              rêves
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={styles.halfPart}>
              <img data-aos="fade-right" data-aos-delay="200" src={contact} alt="contact" />
            </div>
            <div style={styles.halfPart}>
              <form>
                <input data-aos="fade-up" data-aos-delay="300" name="name" type="text" class="feedback-input" placeholder="Nom" />
                <input data-aos="fade-up" data-aos-delay="350" name="email" type="text" class="feedback-input" placeholder="Email" />
                <input data-aos="fade-up" data-aos-delay="400" name="subject" type="text" class="feedback-input" placeholder="Sujet" />
                <textarea data-aos="fade-up" data-aos-delay="450" name="text" class="feedback-input" placeholder="Votre message" />
                <input className="button-send" data-aos="fade-up" data-aos-delay="500" type="submit" value="Envoyer" />
              </form>
            </div>
          </div>
        </div>
        <div style={{ width: '5%' }} />
      </div>
    </div>
  );
};

export default Contact;
