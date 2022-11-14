import React from "react";
import s from "./Graphics.module.scss";
import rightGraphic from "../../../assets/rightGraphic.svg";
import topGraphic from "../../../assets/topGraphic.svg";
import leftGraphic from "../../../assets/leftGraphic.svg";

export const Graphics = () => {
  return (
    <div className={s.container}>
      <img className={s.topGraphic} src={topGraphic} alt="graph" />
      <img className={s.leftGraphic} src={leftGraphic} alt="graph" />
      <img className={s.rightGraphic} src={rightGraphic} alt="graph" />
    </div>
  );
};
