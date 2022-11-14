import React from "react";
import s from "./WomanWithPhoneCard.module.scss";
import WomanWithPhone from "../../../../assets/WomanWithPhone.png";
import WomanWithPhoneGraphic from "../../../../assets/WomanWithPhoneGraphic.png";

export const WomanWithPhoneCard = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.contentBlock}>
        <h3>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
        <p>We connect our customers with the best.</p>
        <p>Advisor success customer launch party.</p>
        <p>Business-to-consumer long tail.</p>
      </div>
      <div className={s.imageBlock}>
        <div className={s.images}>
          <img className={s.womanWithPhone} src={WomanWithPhone}></img>
          <img
            className={s.womanWithPhoneGraphic}
            src={WomanWithPhoneGraphic}
          ></img>
        </div>
      </div>
    </div>
  );
};
