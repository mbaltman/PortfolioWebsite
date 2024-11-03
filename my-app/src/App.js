import pixelDesktop from './imgs/ComputerPixelArt-HighResolution.png';

import './css/pixelDesktop.css';
import {useState} from "react";

// AboutMe.js
const AboutMe = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p>Your about me content goes here...</p>
        </div>
    );
};

// CubeGame.js
const CubeGame = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Cube Game</h2>
            <p>Your cube game content goes here...</p>
        </div>
    );
};

// Typo.js
const Typo = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Typo</h2>
            <p>Your typo content goes here...</p>
        </div>
    );
};

function App() {
    const [activeComponent, setActiveComponent] = useState('AboutMe');

    const renderContent = () => {
        switch(activeComponent) {
            case 'AboutMe':
                return <AboutMe />;
            case 'CubeGame':
                return <CubeGame />;
            case 'Typo':
                return <Typo />;
            default:
                return <AboutMe />;
        }
    };
    
    return (
      <div className="App">
          <div className="fullScreen" id="fullScreenImage">
              <img id="pixelDesktopImg"
                   src={pixelDesktop}
                   alt="image of a desk, with two monitors, rendered in a pixel art style "/>
          </div>

          <div className="fullScreen" id="fullScreenContent">
              <div id="navBar">
                  <NavItem
                      title="About Me"
                      isActive={activeComponent === 'AboutMe'}
                      onClick={() => setActiveComponent('AboutMe')}
                  />
                  <NavItem
                      title="Cube Game"
                      isActive={activeComponent === 'CubeGame'}
                      onClick={() => setActiveComponent('CubeGame')}
                  />
                  <NavItem
                      title="Typo"
                      isActive={activeComponent === 'Typo'}
                      onClick={() => setActiveComponent('Typo')}
                  />
              </div>

              <div id="content">
                  {renderContent()}
              </div>
          </div>
      </div>
    );
}

const NavItem = ({title, isActive, onClick}) => {
    return (
        <div
            className={`p-4 cursor-pointer hover:bg-gray-100 ${isActive ? 'bg-gray-200' : ''}`}
            onClick={onClick}
        >
            <span className="text-lg font-medium cursor-pointer unselectable-text">{title}</span>
        </div>
    );
};

export default App;
