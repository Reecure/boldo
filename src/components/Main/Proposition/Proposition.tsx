import React from "react";
import OfficeWithPcs from "../../../assets/OfficeWithPcs.png";
import s from "./Proposition.module.scss";

export const Proposition = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <img className={s.officeImage} src={OfficeWithPcs} alt="office" />
      </div>
      <div className={s.textContent}>
        <div className={s.textContentLeft}>
          <h3>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
        </div>
        <div className={s.textContentRight}>
          <p>We connect our customers with the best?</p>
          <p>Android research & development rockstar? </p>
        </div>
      </div>
      <div className={s.title}>
        <div className={s.titleTop}>Our Blog</div>
        <div className={s.titleBottom}>
          Value proposition accelerator product management venture
        </div>
      </div>
      <div className={s.cards}>
        <div className={s.card}></div>
        <button>Load More</button>
      </div>
    </div>
  );
};
