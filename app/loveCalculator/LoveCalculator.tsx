"use client"

import React, {useState} from "react";
import {getReport, isValidName} from "@/app/loveCalculator/helpers";
import {CompatibilityReport} from "@/app/loveCalculator/dataobjects";
import ReportDisplay from "@/app/loveCalculator/ReportDisplay";
import InfoDisplay from "@/app/loveCalculator/InfoDisplay";

export default function LoveCalculator() {
    const [formData, setFormData] = useState({
        name1: '',
        name2: '',
    });
    const canSubmit = isValidName(formData.name1) && isValidName(formData.name2);
    
    const [report, setReport] = useState<CompatibilityReport | null >(null);

    const [showReport, setShowReport] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate names
        if (!isValidName(formData.name1) || !isValidName(formData.name2)) {
            return;
        }

        const newReport = getReport(formData.name1, formData.name2);
        setReport(newReport);
        setShowReport(true)
    };
    
    return (
        <div
            id="background"
            className="
            w-screen h-screen 
            bg-[url('/images/loveCalculator/Tileable_Background.png')] bg-repeat bg-size-[250px]
            flex flex-grow flex-row justify-center
            pixelated
            text-label-color
            overflow-y-hidden
        ">
            <div
                id="screen-content"
                className="
            flex flex-col flex-grow justify-start text-center items-center min-w-min
            px-1 md:px-4
            py-2 md:py-6
            "
            >
                <div
                    id="header"
                    className="
                bg-[url('/images/loveCalculator/header-background.png')] 
                bg-no-repeat
                bg-contain
                pixelated
                w-[365px]
                h-[85px]
                flex flex-col justify-center text-center
             ">
                    <h1 className="roboto-mono-font-bold">
                        Compatibility
                    </h1>
                    <h1 className="roboto-mono-font-bold">
                        Calculator
                    </h1>
                </div>

                <div className="relative flex flex-col justify-center items-center w-full">
                    <form
                        className="
                    flex flex-col justify-center items-center
                    p-2 
                    gap-2
                    "
                        onSubmit={handleSubmit}
                    >
                        <div className="
                        bg-[url('/images/loveCalculator/form-field-background.png')] 
                        bg-no-repeat
                        bg-contain
                        pixelated
                        w-[160px]
                        h-[40px]
                        flex flex-col justify-center text-center
                    ">
                            <input type="text"
                                   className="text-center outline-none roboto-mono-font-regular"
                                   id="name1"
                                   placeholder="Your Name"
                                   required
                                   value={formData.name1}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="
                        bg-[url('/images/loveCalculator/plus.png')] 
                        bg-no-repeat
                        bg-contain
                        pixelated
                        w-[55px]
                        h-[55px]
                    ">
                        </div>

                        <div className="
                        bg-[url('/images/loveCalculator/form-field-background.png')] 
                        bg-no-repeat
                        bg-contain
                        pixelated
                        w-[160px]
                        h-[40px]
                        flex flex-col justify-center text-center
                    ">
                            <input type="text"
                                   className="text-center outline-none roboto-mono-font-regular text-label-color"
                                   id="name2"
                                   placeholder="Their Name"
                                   required
                                   value={formData.name2}
                                   onChange={handleChange}
                            />
                        </div>

                        <button type="submit"
                                id="submitButton"
                                className={`
                                bg-[url('/images/loveCalculator/red-button.png')] 
                                bg-no-repeat
                                bg-contain
                                pixelated
                                min-w-[180px] max-w-[180px]
                                min-h-[45px] max-h-[45px]
                                flex flex-col justify-center text-center
                                roboto-mono-font-bold
                                ease-in duration-200
                                ${canSubmit ? 'saturate-100' : 'saturate-25'}
                                `}
                        >
                            Calculate
                        </button>
                    </form>

                    <ReportDisplay
                        report={report}
                        showReport={showReport}
                        onHideReport={() => setShowReport(false)}
                    />

                    <InfoDisplay
                        showInfo={showInfo}
                        onHideInfo={() => setShowInfo(false)}
                    />


                </div>
            </div>
            <button className={`
                                bg-[url('/images/loveCalculator/info.png')] 
                                bg-no-repeat
                                bg-contain
                                pixelated
                                w-[55px]
                                h-[55px]
                                absolute 
                                bottom-[20px] right-[20px]
                                `}
                    onClick={() => setShowInfo(true)}
            >
            </button>
        </div>
    );
}