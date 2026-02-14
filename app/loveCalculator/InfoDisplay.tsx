type InfoDisplayProps = {
    showInfo: boolean;
    onHideInfo: () => void;
}
export default function InfoDisplay({showInfo, onHideInfo}: InfoDisplayProps) {
    
    return (
        <div className={`
            absolute 
            flex flex-col justify-center items-center text-center
            w-screen
            min-h-[500px] max-h-[500px]
            duration-400
            ease-in
            ${showInfo ? 'top-[0px]': 'top-[1000px]'}
            `}
        >
            <div className="
                bg-[url('/images/loveCalculator/report-background.png')] 
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
                        Information
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
                        onClick={onHideInfo}
                    >
                    </button>
                </div>
                
                <hr className="w-full text-label-color "/>

                <div className="
                    roboto-mono-font-regular
                    "
                >
                    <p className="text-sm">
                        These reports are 100% accurate and very offical.
                    </p>

                    <br/>
                    
                    <p className="text-sm">
                        Anania, I love you. If you are ever unsure, or you need a reminder, you can always just come back here and double check.
                    </p>
                </div>
            </div>

        </div>
    )
}