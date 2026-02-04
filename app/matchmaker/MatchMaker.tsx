"use client"

import React, {useState} from "react";

export default function MatchMaker() {
    const [formData, setFormData] = useState({
        name1: '',
        name2: '',
    });
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
            bg-[url('/images/matchmaker/Tileable_Background.png')] bg-repeat bg-size-[200px]
            flex flex-row justify-center
            pixelated
        ">
        <div className="
            flex flex-col justify-center text-center w-min
            "
        >
            <h1 className="">Is this a match?</h1>
            <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
                <input type="text"
                       className="text-center"
                       id="name1"
                       placeholder="Your Name"
                       required
                       value={formData.name1}
                       onChange={handleChange}
                    />
                <input type="text"
                       className="text-center"
                       id="name2"
                       placeholder="Their Name"
                       required
                       value={formData.name2}
                       onChange={handleChange}
                />
                <button type="submit"
                        id="submitButton"
                        className="">Calculate</button>
            </form>
                <h1>Results</h1>
                <h2>{results.message}</h2>
                <h2>Percentage Compatible: {results.percentage}%</h2>
            </div>
        </div>
    );
}