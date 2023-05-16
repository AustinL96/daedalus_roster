import Homepage from "./components/home/Homepage";
import UserPage from "./pages/UserPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/profile" element={<UserPage />} />
          {/* <Route path="/dashboard" element={<UserPage />} />
          <Route path="/logout" element={<UserPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
