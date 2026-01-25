
import './progressItem.css'

export enum ProgressStatus {
    COMPLETED,
    IN_PROGRESS,
    PAUSED
}

type ProgressItemProps = {
    progressStatus: ProgressStatus
}

export const ProgressItem = ({progressStatus}: ProgressItemProps) => {
    function getProgressColor(status: ProgressStatus): string {
        switch (status) {
            case ProgressStatus.COMPLETED: return "#509D47";
            case ProgressStatus.PAUSED: return "#9D4747";
            case ProgressStatus.IN_PROGRESS: return "#E1D834";
        }
    }
    function getProgressLabel(status: ProgressStatus): string {
        switch (status) {
            case ProgressStatus.COMPLETED: return "Completed";
            case ProgressStatus.PAUSED: return "Paused";
            case ProgressStatus.IN_PROGRESS: return "InProgress";
        }
    }
    return (
        <div className="progressItem">
            <div
                className="progressItemIcon"
                style={{ backgroundColor: getProgressColor(progressStatus) }}
            >
            </div>
            <span className="progressItemTitle unselectable-text">
            {getProgressLabel(progressStatus)}
        </span>
        </div>
    );
};