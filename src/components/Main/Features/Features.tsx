import React from "react";
import { Card } from "./Cards/Card";
import { ManWithPhoneCard } from "./Cards/ManWithPhoneCard";
import { WomanWithPhoneCard } from "./Cards/WomanWithPhoneCard";
import s from "./Features.module.scss";

export const Features = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <div className={s.titleTop}>Our Services</div>
        <div className={s.titleBottom}>
          Handshake infographic mass market crowdfunding iteration.
        </div>
      </div>
      <div className={s.featuresCard}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className={s.bestForCustomersMen}>
        <ManWithPhoneCard />
      </div>
      <div className={s.bestForCustomersWoman}>
        <WomanWithPhoneCard />
      </div>
    </div>
  );
};
