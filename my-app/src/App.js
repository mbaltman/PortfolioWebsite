import pixelDesktop from './imgs/ComputerPixelArt-HighResolution.png';

import './css/pixelDesktop.css';

function App() {
  return (
      <div className="App">
          <div className="fullScreen" id="fullScreenImage">
              <img id="pixelDesktopImg"
                   src={pixelDesktop}
                   alt="image of a desk, with two monitors, rendered in a pixel art style "/>
          </div>

          <div className="fullScreen" id="fullScreenContent">
              <div id="navBar">

              </div>

              <div id="content">

              </div>
          </div>
      </div>
  );
}

export default App;
