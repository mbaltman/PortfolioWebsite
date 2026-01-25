import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router";
import MatchMaker from "./matchMaker/MatchMaker";
import PortfolioPage from "./portfolioPage/PortfolioPage";

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<PortfolioPage />} />
              <Route path="/matchmaker" element={<MatchMaker />} />
            </Routes>
        </BrowserRouter>
    );
}