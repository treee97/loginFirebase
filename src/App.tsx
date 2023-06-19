import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { config } from "./config/config";
import AuthRoute from "./components/AuthRoute";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
