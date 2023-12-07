import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import CatalogPage from "../pages/CatalogPage";
import FavoritePage from "../pages/FavoritePage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
