import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NikeNav from "./pages/NikeNav";
import { Outlet, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import ProductPage_1 from "./pages/ProductPage_1";
import MyPage from "./pages/MyPage";

const Layout = () => {
  return (
    <div>
      <NikeNav />

      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/login" element={<MyPage />} />
          <Route path="/product/:id" element={<ProductPage_1 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
