import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./router/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./router/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/products" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
