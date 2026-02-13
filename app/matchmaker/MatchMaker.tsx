"use client"

import React, {useState} from "react";
import {getReport, isValidName} from "@/app/matchmaker/helpers";
import {CompatibilityReport} from "@/app/matchmaker/dataobjects";
import ReportDisplay from "@/app/matchmaker/ReportDisplay";

export default function MatchMaker() {
    const [formData, setFormData] = useState({
        name1: '',
        name2: '',
    });
    const canSubmit = isValidName(formData.name1) && isValidName(formData.name2);
    
    const [report, setReport] = useState<CompatibilityReport | null >(null);
    
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
    };
    
    const hideReport = async () => {
        console.log("hide report")
        setReport(null);
    }
    
    return (
        <div 
            id="background"
            className="
            w-screen h-screen 
            bg-[url('/images/matchmaker/Tileable_Background.png')] bg-repeat bg-size-[250px]
            flex flex-grow flex-row justify-center
            pixelated
            text-label-color
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
                bg-[url('/images/matchmaker/header-background.png')] 
                bg-no-repeat
                bg-contain
                pixelated
                min-w-[365px] max-w-[365px]
                min-h-[85px] max-h-[85px]
                flex flex-col flex-grow justify-center text-center
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
                        bg-[url('/images/matchmaker/form-field-background.png')] 
                        bg-no-repeat
                        bg-contain
                        pixelated
                        min-w-[160px] max-w-[160px]
                        min-h-[40px] max-h-[40px]
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
                        bg-[url('/images/matchmaker/plus.png')] 
                        bg-no-repeat
                        bg-contain
                        pixelated
                        min-w-[55px] max-w-[55px]
                        min-h-[55px] max-h-[55px]
                    ">
                    </div>
    
                    <div className="
                        bg-[url('/images/matchmaker/form-field-background.png')] 
                        bg-no-repeat
                        bg-contain
                        pixelated
                        min-w-[160px] max-w-[160px]
                        min-h-[40px] max-h-[40px]
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
                                bg-[url('/images/matchmaker/red-button.png')] 
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
                    onHideReport={hideReport}
                />
            </div>
        </div>
        </div>
    );
}