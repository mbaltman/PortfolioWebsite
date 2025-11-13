import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router";
import Matchmaker from "./Matchmaker/Matchmaker";
import PortfolioPage from "./PortfolioPage/PortfolioPage";

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<PortfolioPage />} />
              <Route path="/matchmaker" element={<Matchmaker />} />
            </Routes>
        </BrowserRouter>
    );
}