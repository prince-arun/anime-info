import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import SingleItem from "./components/SingleItem";
import Template from "./components/Template";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/anime/:id" element={<SingleItem />} />
          <Route path="/character/:id" element={<Template />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
