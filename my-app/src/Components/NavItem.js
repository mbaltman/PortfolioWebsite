
import './navItem.css'
const NavItem = ({title, iconSrc, isActive, onClick}) => {
    return (
        <div
            className={`navItem ${isActive ? 'activeNavItem' : ''}`}
            onClick={onClick}
        >
            <span className="navItemTitle unselectable-text">{title}</span>
            <img className="navItemIcon" src={iconSrc} alt="icon image"/>
        </div>
    );
};

export default NavItem;
