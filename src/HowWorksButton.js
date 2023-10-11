
import React, { useState } from 'react';
import './MyComponent.css';
import Modal from 'react-modal';
import './HowWorksButton.css';
import logofav from './fav.png';


const HowWorksButton = () => {
    const scrollToParagraph = () => {
      const targetParagraph = document.getElementById('how-it-works-p1');
      if (targetParagraph) {
        targetParagraph.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <button
        className="how-it-works-button"
        onClick={scrollToParagraph}
      >
        How it Works
      </button>
    );
  };


export default HowWorksButton;