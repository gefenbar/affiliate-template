import { useId } from 'react';
import './WaveEffect.css';

export default function WaveSection({ 
  color1, 
  color2, 
  backgroundColor1, 
  backgroundColor2 
}) {
  const gradientId = useId();

  // הגדרת גרדיאנט רקע למיכל
  const containerStyle = {
    background: `linear-gradient(90deg, ${backgroundColor1} 0%, ${backgroundColor2} 100%)`,
  };

  return (
    <div className="wave-section" style={containerStyle}>
      <svg
        className="wave"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`waveGradient-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color1} stopOpacity="1" />
            <stop offset="100%" stopColor={color2} stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#waveGradient-${gradientId})`}
          fillOpacity="1"
          d="M0,224L60,229.3C120,235,240,245,360,250.7C480,256,600,256,720,240C840,224,960,192,1080,192C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
