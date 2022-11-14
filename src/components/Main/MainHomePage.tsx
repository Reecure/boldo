import s from "./MainHomePage.module.scss";
import { Enterprise } from "./Enterprise/Enterprise";
import { Features } from "./Features/Features";

import { Proposition } from "./Proposition/Proposition";

export const MainHomePage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.features}>
        <Features />
      </div>
      <div className={s.enterprise}>
        <Enterprise />
      </div>
      <div className={s.proposition}>
        <Proposition />
      </div>
    </div>
  );
};
