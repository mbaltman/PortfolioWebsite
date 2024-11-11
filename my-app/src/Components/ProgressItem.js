
import './progressItem.css'
export const ProgressItem = ({progress}) => {
    return (
        <div className="progressItem">
            <div className="progressItemIcon" style={{backgroundColor:progress[1]}}> </div>
            <span className="progressItemTitle unselectable-text">{progress[0]}</span>
        </div>
    );
};

export const ProgressStatus = {
    COMPLETED: ["Completed", "#509D47"],
    INPROGRESS: ["In Progress", "#C39E40"],
    PAUSED: ["Paused", "#9D4747"],
}