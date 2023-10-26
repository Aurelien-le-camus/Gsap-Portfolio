import React from "react";
import MainApplication from "./MainApplication";
import './App.css';
import { gsap } from "gsap";

export default function App() {

  let tl = new gsap.timeline();

  return (
    <div className="hero">
      <MainApplication timeline={tl} />
    </div>
  );
}