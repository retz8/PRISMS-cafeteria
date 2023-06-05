import BreakfastPage from "./pages/BreakfastPage/BreakfastPage";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LunchPage from "./pages/LunchPage/LunchPage";
import DinnerPage from "./pages/DinnerPage/DinnerPage";
import BrunchPage from "./pages/BrunchPage/BrunchPage";
import styles from "./App.module.css";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/breakfast" element={<BreakfastPage />} />
          <Route path="/lunch" element={<LunchPage />} />
          <Route path="/dinner" element={<DinnerPage />} />
          <Route path="/brunch" element={<BrunchPage />} />
        </Routes>
      </div>
    </Router>
  );
}
