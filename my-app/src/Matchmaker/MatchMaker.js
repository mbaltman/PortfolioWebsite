import React, {useState} from "react";
import emailjs from "@emailjs/browser";

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
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };
    const handleSubmit = async (e) => {
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
    
    return (<div>
        <h1>Is this a match?</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text"
                       className=""
                       id="name1"
                       placeholder="Your Name"
                       required
                       value={formData.name}
                       onChange={handleChange}
                />
                <input type="text"
                       className=""
                       id="name2"
                       placeholder="Their Name"
                       required
                       value={formData.name}
                       onChange={handleChange}
                />
            </div>
            <button type="submit"
                    id="submitButton"
                    className="">Calculate</button>
        </form>
            <h1>Results</h1>
            <h2>{results.message}</h2>
            <h2>Percentage Compatible: {results.percentage}%</h2>
        </div>
    );
}