import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import WatchListActions from "./WatchListActions";

const WatchListItem = ({ stock }) => {
  const [showWatchlistAcions, setWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setWatchlistActions(true);
  };

  const handleMouseExit = (e) => {
    setWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistAcions && <WatchListActions uid={stock.name}/>}
    </li>
  );
};

export default WatchListItem;
