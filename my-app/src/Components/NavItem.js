
import './navItem.css'
const NavItem = ({title, subtitle, iconSrc, isActive, onClick}) => {
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
            
            <img className="navItemIcon" src={iconSrc} alt="icon image"/>
        </div>
    );
};

export default NavItem;
