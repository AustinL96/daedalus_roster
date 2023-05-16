import Homepage from "./components/home/Homepage";
import UserPage from "./pages/UserPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/profile" element={<UserPage />} />
        {/* <Route path="/dashboard" element={<UserPage />} />
          <Route path="/logout" element={<UserPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
