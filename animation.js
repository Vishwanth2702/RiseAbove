import React, { useEffect, useState } from 'react';
import './styles/animation.css'

const Animations = () => {
  const [animationDuration] = useState(3);
  const [isLoaderVisible, setLoaderVisibility] = useState(true);
  const [isRiseAboveVisible, setRiseAboveVisibility] = useState(true);

  useEffect(() => {
    const riseAboveLetters = document.querySelectorAll('#riseAbove .letter');
    const combinedLetters = document.querySelectorAll('#riseAboveConnect .letter');

    const showCombinedText = () => {
      setRiseAboveVisibility(false);

      setTimeout(() => {
        setLoaderVisibility(false);
      }, animationDuration * combinedLetters.length * 100);
    };

    riseAboveLetters.forEach((letter, index) => {
      letter.style.animationDuration = `${animationDuration}s`;
      letter.style.setProperty('--index', index);
    });

    setTimeout(() => {
      showCombinedText();
    }, animationDuration * 500);
  }, [animationDuration]);

  return (
    <div>
      {isLoaderVisible && (
        <div id="loader-container">
          <div className="letter-slider" id="riseAbove">
            <span className="letter">R</span>
            <span className="letter">i</span>
            <span className="letter">s</span>
            <span className="letter">e</span>
            <span className="letter">A</span>
            <span className="letter">b</span>
            <span className="letter">o</span>
            <span className="letter">v</span>
            <span className="letter">e</span>
          </div>
          <div className="letter-slide" id="riseAboveConnect" style={{ display: isRiseAboveVisible ? 'none' : 'flex' }}>
            <span className="letter">C</span>
            <span className="letter">o</span>
            <span className="letter">n</span>
            <span className="letter">n</span>
            <span className="letter">e</span>
            <span className="letter">c</span>
            <span className="letter">t</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">t</span>
            <span className="letter">o</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">R</span>
            <span className="letter">e</span>
            <span className="letter">c</span>
            <span className="letter">o</span>
            <span className="letter">n</span>
            <span className="letter">n</span>
            <span className="letter">e</span>
            <span className="letter">c</span>
            <span className="letter">t</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Animations;
