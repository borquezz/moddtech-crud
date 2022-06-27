import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
// View imports
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes */}
        <Route path="/" element={<Home />} />
        {/* Redirect any non-existing route to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
