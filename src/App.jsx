import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import LazyFallback from "./components/LazyFallback";

const HomePage = lazy(() => import("./pages/HomePage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotfoundPage = lazy(() => import("./pages/NotfoundPage"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const FunEventsPage = lazy(() => import("./pages/FunEvents"));
const TechEventsPage = lazy(() => import("./pages/TechEvents"));

function App() {
  return (
    <>
      <Suspense fallback={<LazyFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/fun-events" element={<FunEventsPage />} />
          <Route path="/tech-events" element={<TechEventsPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
