import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import Home from "./Home";
import Network from "./Network";
import Jobs from "./Jobs";
import Messages from "./Messages";
import Notifications from "./Notifications";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/network" element={<Network />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </>
  );
}

export default App;
