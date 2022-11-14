import s from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainHomePage } from "./components/Main/MainHomePage";

function App() {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Header />
      </header>
      <main className={s.main}>
        <MainHomePage />
      </main>
      <footer className={s.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
