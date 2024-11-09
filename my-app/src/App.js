import './App.css';

import {useState} from "react";
import NavItem from "./Components/NavItem";
import AboutMe from "./PageContent/AboutMe";
import Typo from "./PageContent/Typo";
import CubeGame from "./PageContent/CubeGame";
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
                   src="/images/ComputerPixelArt-HighResolution.png"
                   alt="image of a desk, with two monitors, rendered in a pixel art style "/>
          </div>

          <div className="fullScreen" id="fullScreenContent">
              <div id="navBar">
                  <div id="navBarInner">
                      <NavItem
                          title="About Me"
                          iconSrc="/images/AboutMeIcon.png"
                          isActive={activeComponent === 'AboutMe'}
                          onClick={() => setActiveComponent('AboutMe')}
                      />
                      <NavItem
                          title="Typo"
                          iconSrc="/images/TypoLogo.png"
                          isActive={activeComponent === 'Typo'}
                          onClick={() => setActiveComponent('Typo')}
                      />
                      <NavItem
                          title="Cube Game"
                          iconSrc="/images/CubeGameIcon.png"
                          isActive={activeComponent === 'CubeGame'}
                          onClick={() => setActiveComponent('CubeGame')}
                      />
                  </div>
              </div>

              <div id="content">
                  {renderContent()}
              </div>
          </div>
      </div>
    );
}

export default App;
