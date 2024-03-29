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
import Login from "./auth/Login";
import VerifyOtp from "./auth/VerifyOtp";
import ConfirmBuy from "./components/pages/ConfirmBuy";

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
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyOtp />} />
        <Route path="/confirm" element={<ConfirmBuy />} />
      </Routes>
    </Router>
  );
}

export default App;