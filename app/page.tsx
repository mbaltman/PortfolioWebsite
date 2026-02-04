
import PortfolioPage from "@/app/portfolioPage/PortfolioPage";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Maxwell's Desktop",
};
export default function Home() {
  return (
      <PortfolioPage/>
  );
}
