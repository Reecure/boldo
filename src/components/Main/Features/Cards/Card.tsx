import s from "./Card.module.scss";
import manWithFiles from "../../../../assets/Rectangle1270.svg";

export const Card = () => {
  return (
    <div className={s.card}>
      <img src={manWithFiles} alt="manWithFiles" />
      <div className={s.cardTitle}>
        <h3>Cool feature title</h3>
        <p className={s.cardDescription}>
          Learning curve network effects return on investment.
        </p>
      </div>
      <button className={s.ExploreBtn}>Explore page </button>
    </div>
  );
};
