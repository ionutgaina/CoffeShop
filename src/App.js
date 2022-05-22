import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../src/pages/Home";
import { Contact } from "../src/pages/Contact";
import { Menu } from "../src/pages/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
