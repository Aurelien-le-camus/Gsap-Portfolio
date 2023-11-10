import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import '../glass.css';

function GlassOrb(props) {
  console.log('props: ', props.is2);
  const [isFlipped, setIsFlipped] = useState(false);
  const is2 = props.is2;
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
      <div className={`glassOrb${is2 ? '2' : ''} ${isFlipped ? 'flipped' : ''}`} style={props.style} onClick={toggleText}>
        <div ref={orbTextRef} className="glassOrbText">
          {displayText}
        </div>
      </div>
    );
  }

  export default GlassOrb;
