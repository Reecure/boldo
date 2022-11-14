import React from "react";
import s from "./ManWithPhoneCard.module.scss";
import ManWithPhone from "../../../../assets/ManWithPhone.png";
import GraphicOnManWithPhone from "../../../../assets/GraphicOnManWithPhone.svg";

export const ManWithPhoneCard = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.imagesBlock}>
        <div className={s.images}>
          <img
            className={s.manWithPhone}
            src={ManWithPhone}
            alt={s.ManWithPhone}
          />
          <img
            className={s.graphicOnManWithPhone}
            src={GraphicOnManWithPhone}
            alt={s.GraphicOnManWithPhone}
          />
        </div>
      </div>
      <div className={s.contentBlock}>
        <h3>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
        <p>We connect our customers with the best.</p>
        <p>Advisor success customer launch party.</p>
        <p>Business-to-consumer long tail.</p>
        <button>Start now</button>
      </div>
    </div>
  );
};
