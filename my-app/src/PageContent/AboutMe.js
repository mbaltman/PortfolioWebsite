import './projectCard.css'

import { Skill, SkillItem, SkillContainer } from "../Components/SkillItem";  // Import both SkillItem and Skill

const AboutMe = () => {
    return (
        <div className="projectCard">
            <div className="titleSection">
                <img id="aboutMeImage" src="/images/AboutMeIcon.png" alt=""/>
                <div className="topTitleSection">
                    <p><span className="boldTitle">Name:</span> Maxwell Altman</p>
                    <p><span className="boldTitle">Job:</span> Founding Engineer @ Typo*</p>
                    <p><span className="boldTitle"> Passions:</span> pixel art, puzzle games, writing code </p>
                    <p><span className="boldTitle">Education:</span> Computer Engineer @ University of Illinois - Urbana Champaing</p>
                </div>
            </div>

            <div className="aboutMeSkillContainer">
                <p><span className="boldTitle">Skills:</span></p>
                <SkillContainer>
                    <SkillItem skill={Skill.UNITY}/>
                    <SkillItem skill={Skill.UNITY}/>
                </SkillContainer>
            </div>


            <p><span className="boldTitle unselectable-text">About Me:</span>
                I am a full stack developer with a passion for video game
                development. My favorite video game is Tetris. You can play
                my version of it here. For the last two years, I have worked
                at Typo*, a messaging app for creative teams. Working on a small
                team ( &lt; 10 people) has been incredibly rewarding and allowed me to
                get my hands dirty, working on every aspect of developing our backend
                and native macOS and iOS clients.
                <br/>
                <br/>
                My formal education in computer development was very much foundational
                and language agnostic. The benefit of that has been that it lets me jump
                between frameworks and languages relatively easily. I don’t really care
                what the tool or the stack is. I just want to make beautiful and
                functional digital experiences.</p>
        </div>
    );
};

export default AboutMe