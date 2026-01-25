import './projectCard.css'

import { Skill, SkillItem, SkillContainer } from "../components/SkillItem";  // Import both SkillItem and Skill
import {ProgressItem, ProgressStatus} from "../components/ProgressItem";

const Baskerville = () => {
    return (
        <div className="projectCard" id="tetrisProjectCard">
            <div className="titleSection">
                <div className="titleImageContainer">
                    <img id="titleImage" src="/images/TetrisGrowth/OpeningScreen.png" alt=""/>
                </div>
                <div className="topTitleSection">
                    <h1 className="boldTitle">Baskerville</h1>
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
        </div>
    );
};

export default Baskerville