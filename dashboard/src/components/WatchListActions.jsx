import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { Grow, Tooltip } from "@mui/material";
import React from "react";

const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <div className="actions-inner">
        <Tooltip title="Buy" placement="top" arrow>
          <button className="buy">Buy</button>
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
