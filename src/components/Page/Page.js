import React from "react";

import classes from "./Page.module.scss";

import Worker from "../../icons/worker.jpg";
import Delivery from "../../icons/delivery.jpg";
import Skeleton from "../../icons/skeleton.svg";
import DoubleInput from "../DoubleInput/DoubleInput";
import Search from "../../icons/search-white.svg";
import Plus from "../../icons/plus.svg";
// import Purple from "../../icons/purple.svg";
// import Coral from "../../icons/coral.svg";

const Page = () => {
  return (
    <div className={classes.page}>
      {/* <div className={classes["worker-img-block"]}>
        <img src={Purple} alt="purple" />
        <img src={Worker} alt="worker" className={classes.worker} />
      </div> */}
      {/* <div className={classes["delivery-img-block"]}>
        <img src={Coral} alt="coral" className={classes.coral} />
        <img src={Delivery} alt="delivery" className={classes.delivery} />
      </div> */}

      <section className={classes.info}>
        <span className={classes["ads-count-label"]}>
          Total ads on the site
        </span>
        <span className={classes["ads-count-number"]}>1,342,356</span>
        <h1 className={classes.heading}>Online service ordering service</h1>
        <span className={classes.subheading}>
          Over 100,000 verified professionals to perform your household or
          business tasks
        </span>
      </section>

      <div className={classes["img-block"]}>
        <img src={Worker} alt="worker" className={classes.worker} />
        <img src={Skeleton} alt="skeleton" className={classes.skeleton} />
        <img src={Delivery} alt="delivery" className={classes.delivery} />
        <div className={classes.search}>
          <input
            type="text"
            className={classes["search-input"]}
            placeholder="Find services simply"
          />
          <img src={Search} alt="search" className={classes["search-icon"]} />
        </div>
        <button className={classes.btn}>
          <img src={Plus} alt="plus" />
          Place your own orders{" "}
        </button>
      </div>

      <DoubleInput />
    </div>
  );
};

export default Page;
