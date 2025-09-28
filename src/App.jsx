import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NotfoundPage from "./pages/NotfoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
