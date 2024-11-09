
import './skillItem.css'
export const SkillItem = ({skill}) => {
    return (
        <div className="skillItem">
            <img className="skillItemIcon" src={skill[1]} alt="icon image"/>
            <span className="skillItemTitle unselectable-text">{skill[0]}</span>
        </div>
    );
};

export const Skill = {
    UNITY: ["Unity", "/images/TypoLogo.png"],
    DOTNET: ["dotnet", "/images/TypoLogo.png"]
}

export const SkillContainer = ({ children }) => {
    return (
        <div className="skillContainer">
            {children}
        </div>
    );
};