import './projectCard.css'

import { Skill, SkillItem, SkillContainer } from "../components/SkillItem";  // Import both SkillItem and Skill
import {ProgressItem, ProgressStatus} from "../components/ProgressItem";

const Tetris = () => {
    return (
        <div className="projectCard" id="tetrisProjectCard">
            <div className="titleSection">
                <div className="titleImageContainer desktopTitleImageContainer">
                    <img id="titleImage" src="/images/TetrisGrowth/OpeningScreen.png" alt=""/>
                </div>
                <div className="topTitleSection">
                    <h1 className="boldTitle">Tetris Growth</h1>
                    <ProgressItem progressStatus={ProgressStatus.COMPLETED}/>
                </div>
                <a className="boldTitle linkButton"
                   href="https://github.com/mbaltman/Tetris-Goalz">
                    Read<br/>Code
                </a>
                <a className="boldTitle linkButton"
                   href="https://simmer.io/@altmanm/~2f70909f-0278-d816-201d-cc4c753283c0">
                    Play<br/>Demo
                </a>
            </div>

            <div className="screenRow thinRow">
                <span className="boldLabel">Summary:</span>
                <p>Tetris is my favorite video game. I played it pretty much constantly as a way to unwind in college.
                    So when I decided to make my first full game, It was a no brainer to pick Tetris! </p>
            </div>

            <SkillContainer>
                <SkillItem skill={Skill.UNITY}/>
            </SkillContainer>

            <div className="screenRow thickRow tetrisRow">
                <div id="tetrisContentText">
                    <p>
                        Making this was, a LOT of trial an error, especially when it came to things like how to think about
                        the base units of the game and how to represent that in the code. I like to learn by doing, and
                        so I would try something out, it wouldn’t work, and then i would try something different.
                        <br/>
                        <br/>
                        For instance in this game, each of the squares is a single unit. At first I was trying to use
                        colliders and read the screen/game objects in order to determine the state of the game. Eventually I
                        realized it was much easier to keep an in memory array tracking the state of the screen, and then use
                        that to generate the visual representation. This also made things like boundary checking and clearing lines
                        simpler.
                    </p>
                  
                </div>
                <div id="tetrisImageList">
                    <video className="screenshot-desktop" autoPlay loop muted>
                        <source src="/images/TetrisGrowth/TetrisGrowth-PlayThrough.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <img className="screenshot-desktop" src="/images/TetrisGrowth/HowTo.png" alt="how to play tetris"/>
                    <img className="screenshot-desktop" src="/images/TetrisGrowth/Credits.png" alt="Credits: Made by Maxwell Altman"/>

                </div>
            </div>
        </div>
    );
};

export default Tetris