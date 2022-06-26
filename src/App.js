import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
// View imports
import Home from "./views/Home";
import AddClient from "./views/AddClient";
import EditClient from "./views/EditClient";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes */}
        <Route path="/" element={<Home />} />
        <Route exact path="/add" element={<AddClient />} />
        <Route exact path="/edit" element={<EditClient />} />
        {/* Redirect any non-existing route to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
