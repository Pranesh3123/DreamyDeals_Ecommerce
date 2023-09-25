import React, { useState, useEffect } from 'react';
import './Typewrit.css'; // Import the CSS file

const Typewriter = ({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const currentPhrase = phrases[currentPhraseIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds (adjust as needed)

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [phrases]);

  return (
    <div className="typewriter-text">
      {currentPhrase}
    </div>
  );
};

export default Typewriter;
