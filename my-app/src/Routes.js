import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router";
import MatchMaker from "./MatchMaker/MatchMaker";
import PortfolioPage from "./PortfolioPage/PortfolioPage";

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<PortfolioPage />} />
              <Route path="/matchmaker" element={<MatchMaker />} />
            </Routes>
        </BrowserRouter>
    );
}