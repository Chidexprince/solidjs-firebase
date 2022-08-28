import { Routes, Route } from "solid-app-router"
import logo from './logo.svg';
import styles from './App.module.css';
import { Dashboard } from "./components/Dashboard";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ResetPassword } from "./components/Reset-Password";


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  );
}

export default App;
