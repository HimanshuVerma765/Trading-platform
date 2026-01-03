import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import GeneralContext from "./GeneralContext";
import BuyActionWindow from "./BuyActionWindow";

const DashboardInner = () => {
  const { isBuyWindowOpen, selectedStockUID } = useContext(GeneralContext);

  return (
    <div className="dashboard-container">
      <WatchList />
      <div className={`action-panel ${isBuyWindowOpen ? "open" : "closed"}`}>
        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      </div>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <GeneralContextProvider>
      <DashboardInner />
    </GeneralContextProvider>
  );
};

export default Dashboard;
