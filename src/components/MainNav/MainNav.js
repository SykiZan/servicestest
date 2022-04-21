import React, { useState } from "react";

import classes from "./MainNav.module.scss";

import Logo from "../../icons/logo.svg";
import Search from "../../icons/search.svg";
import Arrow from "../../icons/arrow.svg";
import { useSelector } from "react-redux";

const MainNav = () => {
  const [selected, setSelected] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isSuggestions, setIsSuggestions] = useState(false);

  const handleSelect = (e) => {
    setSelected(e.target.value);
    setInputVal(e.target.value);
  };
  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const setInput = (val) => {
    setInputVal(val);
    console.log("hi");
  };
  const handleSuggestions = () => {
    setTimeout(() => {
      setIsSuggestions((prev) => !prev);
    }, 100);
  };

  const servicesArr = useSelector((state) => state.services.services);
  return (
    <nav className={classes["main-nav"]}>
      <img src={Logo} alt="logo" />
      <div className={classes.select}>
        <select className={classes["select-order"]} onChange={handleSelect}>
          <option value="" disabled selected hidden>
            Place an order
          </option>
          {servicesArr.map((e, i) => (
            <option>{e}</option>
          ))}
        </select>
        <img src={Arrow} alt="arrow" className={classes.arrow} />
      </div>
      <div className={classes.search}>
        <input
          type="text"
          className={classes["search-input"]}
          placeholder="what needs to be done?"
          value={inputVal}
          onChange={handleInput}
          onFocus={handleSuggestions}
          onBlur={handleSuggestions}
        />
        <img src={Search} alt="search" className={classes["search-icon"]} />
      </div>
      <button className={classes["btn-find"]}>Find an expert</button>
      <div className={classes.select}>
        <select className={classes["select-language"]}>
          <option value="Eng" selected>
            Eng
          </option>
          <option value="Ger" selected>
            Ger
          </option>
          <option value="Esp" selected>
            Esp
          </option>
        </select>
        <img src={Arrow} alt="arrow" className={classes.arrow} />
      </div>
      <button className={classes["btn-sign-in"]}>Sign In</button>
      <button className={classes["btn-become-expert"]}>Become an expert</button>
      <div className={classes.suggestions}>
        {isSuggestions &&
          servicesArr.map((val) => (
            <div
              className={classes.suggestion}
              onClick={() => {
                setInput(val);
              }}
            >
              {val}
            </div>
          ))}
      </div>
    </nav>
  );
};

export default MainNav;
