import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { Grow, Tooltip } from "@mui/material";
import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <div className="actions-inner">
        <Tooltip title="Buy" placement="top" arrow>
          <button className="buy" onClick={() => openBuyWindow(uid)}>
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell" placement="top" arrow>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics" placement="top" arrow>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </div>
    </span>
  );
};

export default WatchListActions;
