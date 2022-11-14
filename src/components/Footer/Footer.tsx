import s from "./Footer.module.scss";
import logo from "../../assets/LogoBlack.svg";

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.footerTopBlock}>
        <h3>An enterprise template to ramp up your company website</h3>
        <div className={s.formBlock}>
          <input type="text" />
          <button>Start now</button>
        </div>
      </div>
      <div className={s.footerBottomBlock}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={s.firstColumn}>
          <a href="#">Landings</a>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Services</a>
        </div>
        <div className={s.secondColumn}>
          <a href="#">Company</a>
          <a href="#">Home</a>
          <a href="#">Careers</a>
          <a href="#">Services</a>
        </div>
        <div className={s.thirdColumn}>
          <a href="#">Resources</a>
          <a href="#">Blog</a>
          <a href="#">Products</a>
          <a href="#">Services</a>
        </div>

        <div className={s.text}>
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </div>
        <div className={s.rights}>All rights reserved.</div>
      </div>
    </div>
  );
};
