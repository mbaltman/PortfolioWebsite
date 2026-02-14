import {useEffect, useState} from "react";

type HeartFillingProps = {
    score: number;
    
}
export default function HeartFilling({score}: HeartFillingProps) {
    const [fillValue, setFillValue] = useState(100);
    const [showLoop, setShowLoop] = useState(false);

    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];

        timers.push(setTimeout(() => setFillValue(100-score), 400)); // start fill animation 
        if (score == 100){
            timers.push(setTimeout(() => setShowLoop(true), 2000));  // start looping heart pulse
        }

        return () => timers.forEach((t) => clearTimeout(t));
    }, []);
    
    return (
        <div
            className="
                w-[120px]
                h-[100px]
                block
            "
        >
            <img className="
                absolute 
                w-[120px]
                h-[100px]
                pixelated
            "
                 src='/images/loveCalculator/heart-filling-bg.png' alt=""/>

            <div className="
                absolute 
                w-[120px]
                h-[100px]
                pixelated
            "
                 style={{
                     maskImage: "url('/images/loveCalculator/heart-filling-bg.png')",
                     maskSize: "contain",
                 }}>

                <img className={`
                    absolute 
                    w-[120px]
                    h-[100px]
                    pixelated
                    duration-1000
                    ease-in
                `}
                     style={{
                         top: `${fillValue}px`
                     }}
                     src='/images/loveCalculator/heart-filling-fill.png' alt=""
                />
            </div>


            <img className="
                absolute 
                w-[120px]
                h-[100px]
                pixelated
            " src='/images/loveCalculator/heart-filling-border.png' alt=""/>

            {
                showLoop &&
                <img className="
                absolute 
                w-[120px]
                h-[100px]
                pixelated
                " src='/images/loveCalculator/heart-pulsing-animation-loop.png' alt=""/>
            }
        </div>
    )
}