import s from "./Header.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { Graphics } from "./graphics/Graphics";
import { LogosCarousel } from "./logosCarousel/logosCarousel";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.navbar}>
          <Navbar />
        </div>
        <div className={s.content}>
          <div className={s.title}>
            <h1>Save time by building fast with Boldo Template</h1>
            <p className={s.description}>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className={s.buttons}>
              <button>Buy Template</button>
              <button>Explore</button>
            </div>
          </div>

          <div className={s.graphics}>
            <Graphics />
          </div>
        </div>
        <div className={s.logos}>
          <LogosCarousel />
        </div>
      </div>
    </header>
  );
};
