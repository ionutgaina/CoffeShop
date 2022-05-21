import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../src/pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
