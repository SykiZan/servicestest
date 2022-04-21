import React from "react";

import classes from "./DoubleInput.module.scss";

import Search from "../../icons/search.svg";
import Point from "../../icons/point.svg";

const DoubleInput = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.top}>
        <div className={classes["inputs-wrapper"]}>
          <div className={classes["input-wrapper"]}>
            <input
              type="text"
              placeholder="What needs to be done?"
              className={classes["input-1"]}
            ></input>
            <img src={Search} alt="search" className={classes["search-icon"]} />
          </div>
          <div className={classes.separator}></div>
          <div className={classes["input-wrapper"]}>
            <input
              type="text"
              placeholder="New York"
              className={classes["input-2"]}
            ></input>
            <img src={Point} alt="search" className={classes["point-icon"]} />
          </div>
        </div>
        <button className={classes["btn-find"]}>Find an expert</button>
      </div>
      <footer className={classes.footer}>
        <a href="#" className={classes.link}>
          How does it work?
        </a>
        <span className={classes["new-users"]}>10,000 New Offers Today</span>
      </footer>
    </div>
  );
};

export default DoubleInput;
