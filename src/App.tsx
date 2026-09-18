import './App.css'
import Home from './pages/home/home.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/login.tsx';
import Register from './pages/register/register.tsx';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
