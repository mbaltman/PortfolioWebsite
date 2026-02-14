import {CompatibilityReport} from "@/app/loveCalculator/dataobjects";
import HeartFilling from "@/app/loveCalculator/HeartFilling";
import {useEffect, useState} from "react";


type ReportDisplayProps = {
    report: CompatibilityReport | null;
    showReport: boolean;
    onHideReport: () => void;
}
export default function ReportDisplay({report, showReport, onHideReport}: ReportDisplayProps) {
    const [reportKey, setReportKey] = useState(0);

    useEffect(() => {
        if (showReport) {
            setReportKey((prev) => prev + 1);
        }
    }, [showReport]);
    
    return (
        <div className={`
            absolute 
            flex flex-col justify-center items-center text-center
            w-screen
            h-[500px]
            duration-400
            ease-in
            ${showReport ? 'top-[0px]': 'top-[1000px]'}
            `}
        >
            <div className="
                bg-[url('/images/loveCalculator/report-background.png')] 
                bg-no-repeat
                bg-contain
                pixelated
                w-[325px]
                h-[500px]
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
                        bg-[url('/images/loveCalculator/xmark.png')] 
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
                    gap-2 flex flex-col 
                    "
                    >
                        <p className="text-sm"> {report.subtitle} </p>
                        <p className="text-sm"> {report.summary}</p>
                        <div className="
                        w-full
                        flex flex-col items-center
                        ">
                            <HeartFilling score={report.score} key={reportKey} ></HeartFilling>

                        </div>

                    </div>
                )}
            </div>

        </div>
    )
}