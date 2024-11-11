import './App.css';

import {useState} from "react";
import NavItem from "./Components/NavItem";
import AboutMe from "./PageContent/AboutMe";
import Typo from "./PageContent/Typo";
import CubeGame from "./PageContent/CubeGame";
import Tetris from "./PageContent/Tetris";

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
            case 'Tetris':
                return <Tetris />;
            case 'Resume':
                return <embed id="embeddedResume" src="/Resume.pdf#view=FitH&navpanes=0"/>;
            default: 
                return '';
        }
    };

    return (
        <div className="App">

        <button id="resumeText"
                    onClick={() => setActiveComponent('Resume')}
            > My <br/> Resume</button>

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
                            title="Untitled Cube Game"
                            iconSrc="/images/CubeGame/CubeGameIcon.png"
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
