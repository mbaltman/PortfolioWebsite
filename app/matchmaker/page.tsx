import {Metadata} from "next";
import MatchMaker from "@/app/matchmaker/MatchMaker";

export const metadata: Metadata = {
    title: "Very Accurate and Scientific Compatibility Calculator",
    description: "see how compatible you are with your crush",
    icons: [
        {
            media: "",
            url: '/images/matchmaker/favicon.ico',
            href: '/images/matchmaker/favicon.ico'
        }
    ]
};
export default function Page() {
    return (
        <MatchMaker/>
    );
}
