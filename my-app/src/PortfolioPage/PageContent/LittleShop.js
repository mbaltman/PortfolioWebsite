import './projectCard.css'

import { Skill, SkillItem, SkillContainer } from "../Components/SkillItem";  // Import both SkillItem and Skill
import {ProgressItem, ProgressStatus} from "../Components/ProgressItem";

const LittleShop = () => {
    return (
        <div className="projectCard" id="littleShopProjectCard">
            <div className="titleSection">
                <div className="titleImageContainer desktopTitleImageContainer">
                    <img id="titleImage" src="/images/LittleShop/LittleShop-titleImage.png" alt=""/>
                </div>
                <div className="topTitleSection">
                    <h1 className="boldTitle">Little Shop of Horrors - The Game</h1>
                    <ProgressItem progress={ProgressStatus.COMPLETED}></ProgressItem>
                </div>
                <a className="boldTitle linkButton"
                   href="https://github.com/mbaltman/LittleShopOfHorror">
                    Read<br/>Code
                </a>
                <a className="boldTitle linkButton"
                   href="https://simmer.io/@altmanm/littleshopofhorrorsthegame">
                    Play<br/>Demo
                </a>
            </div>

            <div className="screenRow thinRow">
                <span className="boldLabel">Summary:</span>
                <p> This game was made for a game jam which had the prompt: make a game for a movie that doesnt have
                    one.
                    I made this with my good friend <a href="">St. Jimmy</a>. He made all of the art and assets, and I
                    worked on the technical
                    aspects. This movie is one of my favorites, so making this game as a sort of testament to it was
                    really fun! </p>
            </div>

            <SkillContainer>
                <SkillItem skill={Skill.UNITY}/>
            </SkillContainer>

            <div className="screenRow thickRow">
                <p>
                    The initial version of this game was made in 3 days, as a part of a game jam. It does have a full set of levels
                    with increasing movement complexity. 
                </p>
                <img className="screenshot-desktop" src="/images/LittleShop/LittleShopGamePlay.png" alt=""/>
            </div>
        </div>
    );
};

export default LittleShop