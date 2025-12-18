import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Login from "./components/Login";
import { useAuth } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
