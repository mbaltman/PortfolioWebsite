
type HeartFillingProps = {
    score: number;
}
export default function HeartFilling({score}: HeartFillingProps) {
    
    var offset = 100-score
    return (
        <div
            className="
                w-[125px]
                h-[100px]
                block
            "
        >
            <img className="
                absolute 
                w-[125px]
                h-[100px]
                pixelated
            "
                 src='/images/loveCalculator/heart-filling-bg.png' alt=""/>

            <div className="
                absolute 
                w-[125px]
                h-[100px]
                pixelated
            "
                 style={{
                     maskImage: "url('/images/loveCalculator/heart-filling-bg.png')",
                     maskSize: "contain",
                 }}>

                <img className={`
                    absolute 
                    w-[125px]
                    h-[100px]
                    pixelated
                `}
                     style={{
                         top: `${offset}px`
                     }}
                     src='/images/loveCalculator/heart-filling-fill.png' alt=""
                />
            </div>


            <img className="
                absolute 
                w-[125px]
                h-[100px]
                pixelated
            " src='/images/loveCalculator/heart-filling-border.png' alt=""/>


        </div>
    )
}