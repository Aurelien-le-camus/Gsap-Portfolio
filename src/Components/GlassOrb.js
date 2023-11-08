import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import '../glass.css';

function GlassOrb(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [displayText, setDisplayText] = useState(props.basicText);
  const orbTextRef = useRef(null);

  const toggleText = () => {
    gsap.to(orbTextRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        if (isFlipped) {
          setDisplayText(props.basicText);
          setIsFlipped(!isFlipped);
        } else {
          setDisplayText(props.newText);
          setIsFlipped(!isFlipped);
        }
        gsap.to(orbTextRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      },
    });
  };

    return (
      <div className={`glassOrb ${isFlipped ? 'flipped' : ''}`} style={props.style} onClick={toggleText}>
        <div ref={orbTextRef} className="glassOrbText">
          {displayText}
        </div>
      </div>
    );
  }

  export default GlassOrb;
