import './projectCard.css'

import { Skill, SkillItem, SkillContainer } from "../Components/SkillItem";  // Import both SkillItem and Skill

const AboutMe = () => {
    return (
        <div className="projectCard">
            <div className="titleSection">
                <div className="titleImageContainer">
                    <img id="titleImage" src="/images/AboutMeIconLarge.png" alt=""/>
                </div>
                <div className="topTitleSection">
                    <p><span className="boldLabel">Name:</span> Maxwell Altman</p>
                    <p><span className="boldLabel">Job:</span> Founding Engineer @ Typo*</p>
                    <p><span className="boldLabel"> Passions:</span> pixel art, puzzle games, writing code </p>
                    <p><span className="boldLabel">Education:</span> Computer Engineer @ University of Illinois - Urbana
                        Champaign</p>
                </div>
            </div>

            <SkillContainer>
                <SkillItem skill={Skill.UNITY}/>
                <SkillItem skill={Skill.DOTNET}/>
                <SkillItem skill={Skill.SWIFTUI}/>
                <SkillItem skill={Skill.SWIFT}/>
                <SkillItem skill={Skill.PICO8}/>
                <SkillItem skill={Skill.FIGMA}/>
                <SkillItem skill={Skill.BLENDER}/>
            </SkillContainer>

            <div className="screenRow thinRow">
                <p className="boldLabel unselectable-text">About Me:</p>
                <p> I am a full stack developer with a passion for video game
                    development. My favorite video game is Tetris. You can play
                    my version of it <a href="https://i.simmer.io/@altmanm/~2f70909f-0278-d816-201d-cc4c753283c0">here</a>.
                    For the last two years, I have worked
                    at <a href="https://typo.inc/">Typo*</a>, a messaging app for creative teams. Working on a small
                    team ( &lt; 10 people) has been incredibly rewarding and allowed me to
                    get my hands dirty, working on every aspect of developing our backend
                    and native macOS and iOS clients.
                    <br/>
                    <br/>
                    My formal education in computer development was very much foundational
                    and language agnostic. The benefit of that has been that it lets me jump
                    between frameworks and languages relatively easily. I don’t really care
                    what the tool or the stack is. I just want to make beautiful and
                    functional digital experiences. </p>
            </div>
        </div>
    );
};

export default AboutMe