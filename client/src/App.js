import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Tasks from "./components/Tasks";
import Prize from "./components/Prize";
import Profile from "./components/Profile";
import Team from "./components/pages/Team";
import VIP from "./components/pages/VIP";
import Reward from "./components/pages/Reward";
import PaymentPage from "./components/pages/PaymentPage";
import UTR from "./components/pages/UTR";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/prize" element={<Prize />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/vip" element={<VIP />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/utr" element={<UTR />} />
      </Routes>
    </Router>
  );
}

export default App;
