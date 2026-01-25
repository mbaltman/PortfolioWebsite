
import './navItem.css'
type NavItemProps = {
    title: string
    subtitle: string
    iconSrc: string
    isActive: boolean
    onClick: () => void  
}
export const NavItem = ({title, subtitle, iconSrc, isActive, onClick} : NavItemProps) => {
    return (
        <div
            className={`navItem ${isActive ? 'activeNavItem' : ''}`}
            onClick={onClick}
        >
            <p className="navItemTitle unselectable-text">
                {title}
            <br/>
                {subtitle}
            </p>
            
            <img className="navItemIcon" src={iconSrc} alt="icon"/>
        </div>
    );
};