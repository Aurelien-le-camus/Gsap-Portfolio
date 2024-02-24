import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../cssAnimations/rectangleHover.css";
import "../cssAnimations/textScroll.css";
import "../cssAnimations/buttonAnimation.css";
import "../cssAnimations/particles.css";
import dublinImage from "../images/dublin.jpg";
import travel from "../images/traveling.png";
import study from "../images/innovation.png";
import bartender from "../images/bartender.png";
import bases from "../images/bases.png";
import progress from "../images/progress.png";
import web from "../images/web.png";
import foreign from "../images/travel.png";
import company from "../images/company.png";
import Clogo from "../images/c.png";
import Linuxlogo from "../images/linux.png";
import Pythonlogo from "../images/Python.png";
import Bashlogo from "../images/bash.png";
import Githublogo from "../images/github.png";
import CPPlogo from "../images/cplus.png";
import ASMlogo from "../images/asm.png";
import JSlogo from "../images/js.png";
import TSlogo from "../images/ts.png";
import Reactlogo from "../images/react.png";
import HTMLlogo from "../images/html.png";
import CSSlogo from "../images/css.png";
import Kotlinlogo from "../images/kotlin.png";
import NOSQLlogo from "../images/nosql.png";
import Mongologo from "../images/mongo.png";
import Rlogo from "../images/R.png";
import ReactNativelogo from "../images/ReactNative.png";
import Cominglogo from "../images/coming.png";
import Language from './Language';

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
    zIndex: 2,
  },
  smallCard: {
    width: '25%',
    height: '30vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1%',
  },
  contentSmallCard: {
    fontSize: '20px',
    color: 'black',
    fontWeight: 600,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
  },
  picture: {
    width: '200px',
  },
  section: {
    width: '100%',
    position: 'absolute',
    borderRadius: 30,
    backgroundColor: '#34343c',
    fontSize: '20px',
    paddingTop: '7%',
    paddingBottom: '7%',
    paddingLeft: '5%',
    paddingRight: '5%',
    fontWeight: 500,
  },
  sectionImage: {
    width: '100%',
    position: 'absolute',
    paddingTop: '7%',
    paddingBottom: '7%',
    paddingLeft: '5%',
    paddingRight: '5%',
  }
};

const Experiences = () => {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const circles = [];

  for (let i = 0; i < 30; i++) {
    circles.push(
      <div key={i} className="circle-container">
        <div className="circle"></div>
      </div>
    );
  }


  let svg = null;

  useEffect(() => {
    svg = document.getElementById("svgPath");
    const length = svg.getTotalLength();

    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    window.addEventListener("scroll", function () {
      const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      const draw = length * scrollpercent * 1.5;
      svg.style.strokeDashoffset = length - draw;
    });
  }, [svg]);

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div style={{ width: '120%', display: 'flex', overflow: 'hidden' }}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ background: '#4A5759' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1100" style={{ width: '25%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 800 }}>
              DESIGN
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="550" style={{ width: '5%' }}>
            <div className="rectangleContainer" style={{ background: '#DEDBD2' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1150" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 500 }}>
              CSS
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="350" style={{ width: '20%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="950" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', color: '#4A5759', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 700 }}>
              HTML
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="750" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ background: '#EDAFB8' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" style={{ width: '5%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="600" style={{ width: '15%' }}>
            <div className="rectangleContainer" />
          </div>
        </div>
        <div style={{ width: '120%', display: 'flex', overflow: 'hidden' }}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1200" style={{ width: '10%' }}>
            <div className="rectangleContainer" style={{ background: 'white' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="400" style={{ width: '15%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="650" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', color: '#EDAFB8', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 500 }}>
              REACT
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1250" style={{ width: '5%' }}>
            <div className="rectangleContainer" style={{ background: '#EDAFB8' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', color: '#DEDBD2', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 800 }}>
              WEB
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="850" style={{ width: '10%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="450" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ background: '#DEDBD2' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1350" style={{ width: '10%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 400 }}>
              JS
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="800" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ background: '#4A5759' }} />
          </div>
        </div>
        <div style={{ width: '120%', display: 'flex', overflow: 'hidden' }}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" style={{ width: '20%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" style={{ width: '10%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 800 }}>
              C
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="700" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ background: '#DEDBD2' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="250" style={{ width: '25%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', color: '#4A5759', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 700 }}>
              MOBILE
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="150" style={{ width: '10%' }}>
            <div className="rectangleContainer" />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1150" style={{ width: '5%' }}>
            <div className="rectangleContainer" style={{ background: '#4A5759' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="900" style={{ width: '15%' }}>
            <div className="rectangleContainer" style={{ display: 'flex', color: '#DEDBD2', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: 400 }}>
              PYTHON
            </div>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="350" style={{ width: '10%' }}>
            <div className="rectangleContainer" style={{ display: 'flex' }} />
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="600" style={{ width: '20%' }}>
            <div className="rectangleContainer" style={{ background: '#EDAFB8' }} />
          </div>
        </div>
        <div data-aos="fade-up" style={{ marginTop: '3%', display: 'flex', justifyContent: 'center', width: '100%', fontSize: '100px', fontWeight: 800 }}>
          EPITECH NANCY
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ position: 'relative', width: '30%' }}>
            <div data-aos="fade-zoom-in" data-aos-ease="ease" style={{ ...styles.section, top: '15%' }}>
              <div style={{ fontSize: '40px', fontWeight: 700, marginBottom: '10%' }}>
                1st Year | Fundamentals
              </div>
              <div style={{ textAlign: 'start' }}>
                <div>
                  - Learning basic development in C
                </div>
                <div>
                  - Basic algorithms and code logic
                </div>
                <div>
                  {`- Discovering Linux (fedora) and git systems`}
                </div>
                <div>
                  - Understanding project-based and active pedagogy
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '5%', justifyContent: 'flex-start', fontSize: '16px' }}>
                <div>
                  <Language logo={Linuxlogo} language={"Linux"} color={"#f3bc02"} />
                </div>
                <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                  <Language logo={Clogo} language={"C"} color={"#6297d2"} />
                </div>
                <div style={{ marginRight: '2%' }}>
                  <Language logo={Pythonlogo} language={"Python"} color={"#3980bb"} />
                </div>
                <div>
                  <Language logo={Bashlogo} language={"Bash"} color={"#fefefe"} />
                </div>
              </div>
            </div>
            <div style={{ ...styles.sectionImage, top: '27%' }}>
              <img alt="progress" src={progress} style={{ width: '450px', height: '400px' }} />
            </div>
            <div data-aos="fade-zoom-in" data-aos-ease="ease" style={{ ...styles.section, top: '50%' }}>
              <div style={{ fontSize: '40px', fontWeight: 700, marginBottom: '10%' }}>
                3rd Year | Exploring
              </div>
              <div style={{ textAlign: 'start' }}>
                <div>
                  - Selection of specialities for 4th and 5th years
                </div>
                <div>
                  {`- Discovering Web and Mobile development (JavaScript, Kotlin, React)`}
                </div>
                <div>
                  {`- Massive professional experiences (Epitech Nancy and English World)`}
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '5%', justifyContent: 'flex-start', fontSize: '16px' }}>
                <div>
                  <Language logo={HTMLlogo} language={"HTML"} color={"#e85328"} />
                </div>
                <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                  <Language logo={CSSlogo} language={"Css"} color={"#254de5"} />
                </div>
                <div style={{ marginRight: '2%' }}>
                  <Language logo={JSlogo} language={"JS"} color={"#d5ba32"} />
                </div>
                <div>
                  <Language logo={Reactlogo} language={"React"} color={"#23a5bd"} />
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '2%', justifyContent: 'flex-start', fontSize: '16px' }}>
                <div>
                  <Language logo={CPPlogo} language={"C++"} color={"#c3c3c3"} />
                </div>
                <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                  <Language logo={Kotlinlogo} language={"Kotlin"} color={"#d76878"} />
                </div>
                <div>
                  <Language logo={TSlogo} language={"TS"} color={"#6fa2d7"} />
                </div>
              </div>
            </div>
            <div style={{ ...styles.sectionImage, top: '67%' }}>
              <img alt="foreign" src={foreign} style={{ width: '450px', height: '400px' }} />
            </div>
            <div data-aos="fade-zoom-in" data-aos-ease="ease" style={{ ...styles.section, top: '90%' }}>
              <div style={{ fontSize: '40px', fontWeight: 700, marginBottom: '10%' }}>
                5th Year | Specialising
              </div>
              <div style={{ textAlign: 'start' }}>
                <div>
                  - Mastering Js, Ts, React, React-Native
                </div>
                <div>
                  - Developping soft skills throught modules at Paris
                </div>
                <div>
                  {`- Finalizing end of studies project (EIP)`}
                </div>
                <div>
                  {`- Working in companies during entire year (Epitech Nancy, Agoraa ?)`}
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '5%', justifyContent: 'flex-start', fontSize: '16px' }}>
                <div>
                  <Language logo={HTMLlogo} language={"HTML"} color={"#e85328"} />
                </div>
                <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                  <Language logo={CSSlogo} language={"Css"} color={"#254de5"} />
                </div>
                <div style={{ marginRight: '2%' }}>
                  <Language logo={TSlogo} language={"TS"} color={"#6fa2d7"} />
                </div>
                <div>
                  <Language logo={Reactlogo} language={"React"} color={"#23a5bd"} />
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '2%', justifyContent: 'flex-start', fontSize: '16px' }}>
                <div>
                  <Language logo={ReactNativelogo} language={"React-Native"} color={"#bfd9e4"} />
                </div>
                <div style={{ marginLeft: '2%' }}>
                  <Language logo={Cominglogo} language={"Coming soon"} color={"#f01a6e"} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '30%' }}>
            <svg width="357" height="3000">
              <path id="svgPath" stroke="#fff" strokeWidth="5px" fill="none" d="M268,106C293.6990093311958,156.98197064989517,319.39801866239156,207.96394129979035,282,250C244.6019813376084,292.03605870020965,144.10693468162947,325.1262054507337,89,388C33.89306531837054,450.8737945492663,24.174242611090563,543.5312368972745,18,666C11.82575738890944,788.4687631027255,9.196094874008299,940.7488469601676,13,1056C16.8039051259917,1171.2511530398324,27.04137789287624,1249.4733752620546,71,1351C114.95862210712376,1452.5266247379454,192.6383935544868,1577.3576519916141,242,1659C291.3616064455132,1740.6423480083859,312.40504788917667,1779.0960167714886,268,1879C223.59495211082336,1978.9039832285114,113.74141488880667,2140.258280922432,88,2337C62.25858511119333,2533.741719077568,120.62929255559666,2765.8708595387843,179,2998" />
            </svg>
          </div>
          <div style={{ position: 'relative', width: '30%' }}>
            <div style={{ ...styles.sectionImage, top: '12%' }}>
              <img alt="bases" src={bases} style={{ width: '450px', height: '400px' }} />
            </div>
            <div data-aos="fade-zoom-in" data-aos-ease="ease" style={{ ...styles.section, top: '30%' }}>
              <div style={{ fontSize: '40px', fontWeight: 700, marginBottom: '10%' }}>
                2nd Year | Deepening
              </div>
              <div style={{ textAlign: 'start' }}>
                <div>
                  - Learning object-oriented-programming in C++
                </div>
                <div>
                  - Lot of teamwork and organization with many tools
                </div>
                <div>
                  {`- First professional experience in company (Axians Nancy)`}
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '5%', justifyContent: 'flex-start', fontSize: '16px' }}>
                <div>
                  <Language logo={Githublogo} language={"Github"} color={"#8d8d8d"} />
                </div>
                <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                  <Language logo={Clogo} language={"C"} color={"#6297d2"} />
                </div>
                <div style={{ marginRight: '2%' }}>
                  <Language logo={CPPlogo} language={"C++"} color={"#c3c3c3"} />
                </div>
                <div style={{ marginRight: '2%' }}>
                  <Language logo={Pythonlogo} language={"Python"} color={"#3980bb"} />
                </div>
                <div>
                  <Language logo={ASMlogo} language={"ASM"} color={"#20314b"} />
                </div>
              </div>
            </div>
            <div style={{ ...styles.sectionImage, top: '47%' }}>
              <img alt="web" src={web} style={{ width: '450px', height: '400px' }} />
            </div>
            <div data-aos="fade-zoom-in" data-aos-ease="ease" style={{ ...styles.section, top: '70%' }}>
              <div style={{ fontSize: '40px', fontWeight: 700, marginBottom: '10%' }}>
                4th Year | International
              </div>
              <div style={{ textAlign: 'start' }}>
                <div>
                  - Working on Data Science course of TU Dublin
                </div>
                <div>
                  - Exploring brand new languages like R, PySpark
                </div>
                <div>
                  {`- Mastering Data management (NoSQL, MongoDB)`}
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '5%', justifyContent: 'flex-start', fontSize: '16px' }}>
                <div>
                  <Language logo={HTMLlogo} language={"HTML"} color={"#e85328"} />
                </div>
                <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                  <Language logo={CSSlogo} language={"Css"} color={"#254de5"} />
                </div>
                <div style={{ marginRight: '2%' }}>
                  <Language logo={TSlogo} language={"TS"} color={"#6fa2d7"} />
                </div>
                <div>
                  <Language logo={Reactlogo} language={"React"} color={"#23a5bd"} />
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '2%', justifyContent: 'flex-start', fontSize: '16px' }}>
                <div>
                  <Language logo={Rlogo} language={"R"} color={"#1a65b8"} />
                </div>
                <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                  <Language logo={NOSQLlogo} language={"NoSQL"} color={"#1a4b71"} />
                </div>
                <div style={{ marginRight: '2%' }}>
                  <Language logo={Mongologo} language={"Mongo"} color={"#419833"} />
                </div>
                <div>
                  <Language logo={ReactNativelogo} language={"React-Native"} color={"#bfd9e4"} />
                </div>
              </div>
            </div>
            <div style={{ ...styles.sectionImage, top: '87%' }}>
              <img alt="company" src={company} style={{ width: '450px', height: '400px' }} />
            </div>
          </div>
        </div>
        <div style={{ marginTop: '7%', width: '100%', display: 'flex', flexDirection: 'row' }}>
          <div data-aos="fade-right" style={{ width: '50%', display: 'flex', justifyContent: 'flex-end', fontSize: '100px', fontWeight: 600, color: 'white' }}>
            WE
          </div>
          <div data-aos="fade-left" style={{ width: '50%', display: 'flex', justifyContent: 'flex-start', fontSize: '100px', fontWeight: 200, color: 'white', marginTop: '5%', marginLeft: '2%' }}>
            ARE
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <div data-aos="fade-right" className="textBorder" style={{ width: '50%', display: 'flex', justifyContent: 'flex-end', fontSize: '100px', fontWeight: 600, color: '#242424' }}>
            THE
          </div>
          <div data-aos="fade-left" style={{ width: '50%', display: 'flex', justifyContent: 'flex-start', fontSize: '100px', fontWeight: 800, color: 'white', marginTop: '6%', marginLeft: '2%' }}>
            FUTURE
          </div>
        </div>
        <div data-aos="fade-up" style={{ width: '80%', height: '100vh', backgroundColor: 'white', marginTop: '5%', marginBottom: '3%', display: 'flex', flexDirection: 'column', padding: '2%' }}>
          <div style={{ fontSize: '130px', color: 'black', fontWeight: 700, width: '100%' }}>
            DUBLIN TRIP
          </div>
          <div style={{ fontSize: '30px', color: 'black', fontWeight: 700, width: '100%' }}>
            Unforgettable year
          </div>
          <div style={{ height: '80%', marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', background: `url(${dublinImage})`, backgroundSize: 'cover', borderRadius: 7 }} />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginBottom: '7%' }}>
          <div data-aos="fade-up" data-aos-delay="100" style={styles.smallCard}>
            <img src={travel} alt="travel" style={styles.picture} />
            <div style={styles.contentSmallCard}>
              {`4th year of Epitech in another country than France (incredible chance)`}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" style={styles.smallCard}>
            <img src={study} alt="study" style={styles.picture} />
            <div style={styles.contentSmallCard}>
              {`A successfull year at Technological University of Dublin (double certification)`}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" style={styles.smallCard}>
            <img src={bartender} alt="bartender" style={styles.picture} />
            <div style={styles.contentSmallCard}>
              A crazy new experience with his package of surprise and new encounters
            </div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <div data-aos="fade-zoom-in" style={{ width: '100%', marginTop: '2%', fontSize: '70px', fontWeight: 600 }}>
            LET'S WORK
          </div>
          <div data-aos="fade-zoom-in" style={{ width: '100%', marginBottom: '5%', fontSize: '100px', fontWeight: 800 }}>
            TOGETHER !
          </div>
          <div style={{ width: '100%', marginBottom: '3%', display: 'flex', justifyContent: 'center' }}>
            <button className="contactButton" onClick={() => navigate("/contact")}>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
