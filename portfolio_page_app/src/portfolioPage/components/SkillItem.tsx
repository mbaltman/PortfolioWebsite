import './skillItem.css'

export enum Skill {
    BLENDER = "BLENDER",
    DOTNET = "DOTNET",
    FIGMA = "FIGMA",
    PICO8 = "PICO8",
    SWIFT = "SWIFT",
    SWIFTUI = "SWIFTUI",
    UNITY = "UNITY",
}

const SkillData: Record<Skill, [string, string]> = {
    [Skill.BLENDER]: ["Blender", "/images/skillIcons/BlenderLogo.png"],
    [Skill.DOTNET]: ["dotnet", "/images/skillIcons/DotnetLogo.png"],
    [Skill.FIGMA]: ["Figma", "/images/skillIcons/FigmaLogo.png"],
    [Skill.PICO8]: ["PICO8", "/images/skillIcons/PICO8Logo.png"],
    [Skill.SWIFT]: ["UIKit / SwiftUI", "/images/skillIcons/SwiftLogo.png"],
    [Skill.SWIFTUI]: ["SwiftUI", "/images/skillIcons/SwiftUILogo.png"],
    [Skill.UNITY]: ["Unity", "/images/skillIcons/UnityLogo.png"],
}

type SkillItemProps = {
    skill: Skill
}

export const SkillItem = ({ skill }: SkillItemProps) => {
    const [label, icon] = SkillData[skill];
    return (
        <div className="skillItem">
            <img className="skillItemIcon" src={icon} alt="icon"/>
            <span className="skillItemTitle unselectable-text">{label}</span>
        </div>
    );
};

type SkillContainerProps = {
    children: React.ReactNode
}

export const SkillContainer = ({ children }: SkillContainerProps) => {
    return (
        <div className="skillContainer">
            <p className="skillTitle"><span className="boldLabel">Skills:</span></p>
            <div className="skillItemContainer">
                {children}
            </div>
        </div>
    );
};