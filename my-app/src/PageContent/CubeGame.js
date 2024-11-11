import './projectCard.css'

import { Skill, SkillItem, SkillContainer } from "../Components/SkillItem";  // Import both SkillItem and Skill
import {ProgressItem, ProgressStatus} from "../Components/ProgressItem";

const CubeGame = () => {
    return (
        <div className="projectCard">
            <div className="titleSection">
                <div className="titleImageContainer">
                    <img id="titleImage" src="/images/CubeGame/CubeGameIcon.png" alt=""/>
                </div>
                <div className="topTitleSection">
                    <p className="boldTitle">Untitled Cube Game</p>
                    <ProgressItem progress={ProgressStatus.INPROGRESS}></ProgressItem>
                </div>
            </div>

            <div className="screenRow thinRow">
                <span className="boldLabel">Summary:</span>
                <p>This game was inspired by my love of puzzles and fidgeting. I am.. not very good at solving
                    Rubik’s cubes so I decided to make a game that had a different goal instead. The most challenging
                    part has been doing the gesture detection and animation of the Rubik’s cube in 3D space, especially
                    since this
                    is the first 3D game I have ever made. </p>
            </div>

            <SkillContainer>
                <SkillItem skill={Skill.UNITY}/>
                <SkillItem skill={Skill.FIGMA}/>
                <SkillItem skill={Skill.BLENDER}/>
            </SkillContainer>

            <div className="screenRow cubeGameRow">
                <p>This was my first time fully designing a game in Figma, before implementing it in code.
                    I wanted to keep the design minimal and 80’s themed, inspired by games like <a
                        href="https://www.isowords.xyz/">ioswords</a> and
                    Pacman.
                    <br/>
                    <br/>
                    I usually find writing code more energizing than working on design, so I now
                    switch back and forth between the two, as I continue to work on this game.
                </p>
                <img className="screenshot" src="/images/CubeGame/CubeGameScreenShot_HomeScreen.png" alt=""/>
                <img className="screenshot" src="/images/CubeGame/CubeGameScreenShot_GamePlay.png" alt=""/>
            </div>

            <div className="screenRow cubeGameRow">
                <video className="screenshot" autoPlay loop muted>
                    <source src="/images/CubeGame/TrimmedCubeGameRecording.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <p>
                    The prototype supports a move based count down mode. It shows the full game loop and saves
                    high scores locally. I separated out the code into a couple of core features. 
                    <br/>
                    <br/>
                    The Cube Manager is the most complex. It handles the state of the cube and animations run on the cube.  
                    There are separate pure functions that handle shuffling the cube at the beginning of each round, and a  
                    pattern detectors that checks for a match between the card and the cube, after each turn. 
                </p>
            </div>

            <div className="screenRow cubeGameRow">
                <p>
                    I plan to implement multiple game modes including a daily challenge mode. This will also include live 
                    leader boards. This game is something I want to continue iterating on, with the end goal of sharing it
                    on the app store. 
                </p>
                <img className="screenshot" src="/images/CubeGame/CubeGameScreenShot_DailyChallenge.png" alt=""/>

            </div>

        </div>
    );
};

export default CubeGame