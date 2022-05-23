import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../src/pages/Home";
import { Contact } from "../src/pages/Contact";
import { Menu } from "../src/pages/Menu";
import { Admin } from "../src/pages/Admin";
import { CreateProduct } from "../src/pages/CreateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element ={<Admin />} />
          <Route path="/admin/create" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
