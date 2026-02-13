"use client"

import React, {useState} from "react";

export default function MatchMaker() {
    const [formData, setFormData] = useState({
        name1: '',
        name2: '',
    });
    const canSubmit = formData.name1 !== '' && formData.name2 !== '';

    const [submitted, setSubmitted] = useState(false);

    const [results, setResults] = useState({
        message: '',
        percentage: 0,
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate names
        const isName1Valid = formData.name1.trim() !== '';
        const isName2Valid = formData.name2.trim() !== '';
        if (!isName1Valid || !isName2Valid) {
            return;
        }
        
        if(formData.name1 === "Maxwell" && formData.name2 === "Anania"){
            setResults(prevState => ({
                message: "Perfect Match!",
                percentage: 100
            }))
        } else {
            setResults(prevState => ({
                message: "Terrible Match :(",
                percentage: 0
            }))
        }

        setSubmitted(true)
    };
    
    return (
        <div className="
            w-screen h-screen 
            bg-[url('/images/matchmaker/Tileable_Background.png')] bg-repeat bg-size-[250px]
            flex flex-row justify-center
            pixelated
            text-label-color
        ">
        <div className="
            flex flex-col justify-start text-center items-center min-w-min
            px-1 md:px-4
            py-2 md:py-6
            "
        >
            <div className="
                bg-[url('/images/matchmaker/header-background.png')] 
                bg-no-repeat
                bg-contain
                pixelated
                min-w-[365px] max-w-[365px]
                min-h-[85px] max-h-[85px]
                flex flex-col justify-center text-center
             ">
                <h1 className="roboto-mono-font-bold">
                    Compatibility
                </h1>
                <h1 className="roboto-mono-font-bold">
                    Calculator
                </h1>
            </div>

            <form className="
            flex flex-col justify-center items-center
            p-2 
            gap-2
            " onSubmit={handleSubmit}>
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
                            ${canSubmit ?  'saturate-100' : 'saturate-25'}
                            `}
                        >
                    Calculate
                </button>
            </form>
            <h1>Results</h1>
            <h2>{results.message}</h2>
            <h2>Percentage Compatible: {results.percentage}%</h2>
        </div>
        </div>
    );
}