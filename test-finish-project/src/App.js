import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import css from "./App.module.css";

const Home = lazy(() => import("./components/Home/Home"));
const AutoCatalog = lazy(() => import("./components/AutoCatalog/AutoCatalog"));
const LikesList = lazy(() => import("./components/LikesList/LikesList"));

function App() {
  return (
    <div>
      <nav className={css.navLink}>
        <NavLink className={css.link} id={"linkHome"} to="/" end>
          Home
        </NavLink>
        <NavLink className={css.link} id={"linkAutoCatalog"} to="/autocatalog">
          Auto catalog
        </NavLink>
        <NavLink className={css.link} id={"linkLikesList"} to="/likeslist">
          Likes list
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="autocatalog" element={<AutoCatalog />}></Route>
          <Route path="likeslist" element={<LikesList />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
