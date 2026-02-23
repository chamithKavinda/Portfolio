import  { useRef } from 'react';
import hoverSoundFile from '../../assets/effects/pop-sound-effect-226108.mp3';
import './home.css'

const Social = () => {
  const hoverSound = useRef(new Audio(hoverSoundFile)); 

  const playSound = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0; 
      hoverSound.current.play().catch((error) => {
        console.error('Error playing sound:', error);
      });
    }
  };

  console.log('Hello')

  return (
    <div className="home__social">
      <div className="group relative">
        <a
          href="https://github.com/chamithKavinda"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound} 
        >
          <i className="uil uil-github-alt"></i>
        </a>
        <span className="tooltip-content">GitHub</span>
      </div>

      <div className="group relative">
        <a
          href="https://www.linkedin.com/in/chamith-kavinda-880330282"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-linkedin"></i>
        </a>
        <span className="tooltip-content">LinkedIn</span>
      </div>

      <div className="group relative">
        <a
          href="https://dribbble.com/ChamithKavinda"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-dribbble"></i>
        </a>
        <span className="tooltip-content">Dribbble</span>
      </div>

      <div className="group relative">
        <a
          href="https://dribbble.com/ChamithKavinda"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-twitter"></i>
        </a>
        <span className="tooltip-content">X</span>
      </div>

      <div className="group relative">
        <a
          href="https://www.instagram.com/_chamith_kavinda_13/"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-instagram"></i>
        </a>
        <span className="tooltip-content">Instagram</span>
      </div>

      <div className="group relative">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-facebook"></i>
        </a>
        <span className="tooltip-content">Facebook</span>
      </div>

      <div className="group relative">
        <a
          href="https://www.tiktok.com/@your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon flex items-center justify-center"
          onMouseEnter={playSound}
        >
          <svg 
            width="1.2rem" 
            height="2.2rem" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.6-1.53-2.01-2.52v6.44c.02 1.2-.28 2.44-.94 3.42-.62.97-1.55 1.74-2.61 2.15-1.12.45-2.38.58-3.56.36-1.2-.2-2.35-.78-3.23-1.63-.98-.93-1.64-2.22-1.84-3.56-.23-1.39.02-2.86.74-4.1.66-1.13 1.74-2.03 3.01-2.45 1.1-.38 2.3-.41 3.42-.1v4.06c-.84-.23-1.78-.17-2.54.3-.61.37-1.05.98-1.22 1.68-.19.74-.08 1.56.3 2.22.34.61.94 1.07 1.62 1.25.75.2 1.57.1 2.25-.26.6-.32 1.07-.86 1.3-1.5.14-.42.17-.87.16-1.31V0l-.01.02z"/>
          </svg>
        </a>
        <span className="tooltip-content">TikTok</span>
      </div>
    </div>
  );
};

export default Social;
