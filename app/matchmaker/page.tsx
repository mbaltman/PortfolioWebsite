import {Metadata} from "next";
import MatchMaker from "@/app/matchmaker/MatchMaker";

export const metadata: Metadata = {
    title: "Very Accurate and Scientific Compatibility Calculator",
    description: "see how compatible you are with your crush",
    icons: [
        {
            media: "",
            url: "",
        }
    ]
};
export default function Home() {
    return (
        <MatchMaker/>
    );
}
