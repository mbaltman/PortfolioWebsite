
import './skillItem.css'
export const SkillItem = ({skill}) => {
    return (
        <div className="skillItem">
            <img className="skillItemIcon" src={skill[1]} alt="icon"/>
            <span className="skillItemTitle unselectable-text">{skill[0]}</span>
        </div>
    );
};

export const Skill = {
    BLENDER: ["Blender", "/images/skillIcons/BlenderLogo.png"],
    DOTNET: ["dotnet", "/images/skillIcons/DotnetLogo.png"],
    FIGMA: ["Figma", "/images/skillIcons/FigmaLogo.png"],
    PICO8: ["PICO8", "/images/skillIcons/PICO8Logo.png"],
    SWIFT: ["UIKit / UIKit", "/images/skillIcons/SwiftLogo.png"],
    SWIFTUI: ["SwiftUI", "/images/skillIcons/SwiftUILogo.png"],
    UNITY: ["Unity", "/images/skillIcons/UnityLogo.png"],
}

export const SkillContainer = ({ children }) => {
    return (
        <div className="skillContainer">
            <p className="skillTitle"><span className="boldLabel">Skills:</span></p>
            <div className="skillItemContainer">
                {children}
            </div>
        </div>
    );
};