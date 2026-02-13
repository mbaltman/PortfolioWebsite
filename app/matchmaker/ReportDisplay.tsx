import {CompatibilityReport} from "@/app/matchmaker/dataobjects";


type ReportDisplayProps = {
    report: CompatibilityReport | null;
    onHideReport: () => void;
}
export default function ReportDisplay({report, onHideReport}: ReportDisplayProps) {
    
    return (
        <div className={`
            absolute 
            flex flex-col justify-center items-center text-center
            w-screen
            min-h-[500px] max-h-[500px]
            duration-400
            ease-in
            ${report != null ? 'top-[0px]': 'top-[1000px]'}
            `}
        >
            <div className="
                bg-[url('/images/matchmaker/report-background.png')] 
                bg-no-repeat
                bg-contain
                pixelated
                min-w-[325px] max-w-[325px]
                min-h-[500px] max-h-[500px]
                roboto-mono-font-regular
                text-label-color
                flex flex-col justify-start text-start
                p-8
                gap-2
            ">
                <div className="
                    flex flex-row justify-between items-center
                ">
                    <h1 className="roboto-mono-font-bold">
                        Results
                    </h1>

                    <button
                        type="button"
                        className={`
                        bg-[url('/images/matchmaker/xmark.png')] 
                        bg-no-repeat
                        bg-contain
                        pixelated
                        w-[25px]
                        h-[25px]
                       `}
                        onClick={onHideReport}
                    >
                    </button>
                </div>
                
                <hr className="w-full text-label-color "/>

                {report && (
                    <div className="
                    roboto-mono-font-regular
                    "
                    >
                        <p className="text-sm"> {report.subtitle} </p>
                        <br/>
                        <p className="text-sm"> {report.summary}</p>

                    </div>
                )}
            </div>

        </div>
    )
}