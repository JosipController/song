
import React, { useState } from 'react';
import './MyComponent.css';
import Modal from 'react-modal';
import './HowWorksButton.css';
import logofav from './fav.png';


const BackToTopButton = () => {
    const scrollToParagraph = () => {
      const targetParagraph = document.getElementById('logo-id');
      if (targetParagraph) {
        targetParagraph.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <button
        className="back-to-top-button"
        onClick={scrollToParagraph}
      >
        Back to Top
      </button>
    );
  };


export default BackToTopButton;