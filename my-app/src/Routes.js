import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router";
import PortfolioPage from "./Pages/PortfolioPage";
import MatchMaker from "./Pages/MatchMaker";

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