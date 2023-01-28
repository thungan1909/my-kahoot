import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import VerifyEmail from "./page/VerifyEmail/VerifyEmail";
import './style/style.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/verifyemail" element={<VerifyEmail/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
