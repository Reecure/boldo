import React from "react";
import s from "./Features.module.scss";

export const Features = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <div className={s.titleTop}>Our Services</div>
        <div className={s.titleBottom}>
          Handshake infographic mass market crowdfunding iteration.
        </div>
        <div className={s.featuresCard}></div>
      </div>
    </div>
  );
};
