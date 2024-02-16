import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Adverts from "./components/Adverts";
import HomePage from "./pages/HomePage";
import Catalog from "./pages/Catalog";
import Favourite from "./pages/Favourite";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
    </>
  );
}

export default App;
