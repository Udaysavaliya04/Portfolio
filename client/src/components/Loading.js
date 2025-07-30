import React, { useState, useEffect } from 'react';

const Loading = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase('fadeOut');
    }, 1800);

    const timer2 = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`magic-loader ${animationPhase}`}>
      <div className="magic-loader-content">
        <div className="magic-loader-logo">
          <div className="magic-logo-symbol">
            <div className="magic-logo-inner">
              <span>JS</span>
            </div>
          </div>
        </div>
        <div className="magic-loader-text">
          <div className="magic-loader-line"></div>
        </div>
      </div>
      <div className="magic-loader-progress">
        <div className="magic-progress-bar"></div>
      </div>
    </div>
  );
};

export default Loading;
