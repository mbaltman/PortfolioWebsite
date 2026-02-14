import {Metadata} from "next";
import LoveCalculator from "@/app/loveCalculator/LoveCalculator";

export const metadata: Metadata = {
    title: "Very Accurate and Scientific Calculator",
    description: "see how compatible you are with your crush",
    icons: [
        {
            media: "",
            url: '/images/loveCalculator/favicon.ico',
            href: '/images/loveCalculator/favicon.ico'
        }
    ]
};
export default function Page() {
    return (
        <LoveCalculator/>
    );
}
