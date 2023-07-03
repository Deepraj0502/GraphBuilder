import './App.css';
import Heatmap from './Components/Heatmap';
import Home from './Components/Home';
import Graphs from './Components/Graphs'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Home />]} />
          <Route path="/heatmap" element={[<Heatmap />]} />
          <Route path="/graphs" element={[<Graphs/>]} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
